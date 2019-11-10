import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { AppBar } from "../../components/AppBar";
import { FormBox } from "../../components/FormBox";
import { Card } from "../../components/Card";

import empty from "../../assets/images/empty.png";
import "./styles.scss";

const Main = () => {
  const [showFormBox, setShowFormBox] = useState(false);
  const [objectsFound, setObjectsFound] = useState([]);
  const [formValues, setFormValues] = useState({
    image: null,
    title: "",
    description: "",
    phone: ""
  });
  const [file, setFile] = useState(null);

  const handleFormValues = e => {
    const values = { ...formValues };
    if (e.target.name === "image") {
      setFile(e.target.files[0]);
      console.log("entreo");
      console.log(JSON.stringify(e.target.files[0]));
    }
    values[e.target.name] = e.target.value;

    setFormValues(values);
  };

  const handleFormBox = () => {
    setFormValues({
      image: null,
      title: "",
      description: "",
      phone: ""
    });

    setShowFormBox(!showFormBox);
  };

  const fetchObjectsList = async () => {
    const { data } = await api.get("/found-object");
    setObjectsFound(data);
  };

  const createObject = async e => {
    e.preventDefault();
    console.log(JSON.stringify(file));
    const { title, description } = formValues;

    const headers = {
      "content-type": "multipart/form-data"
    };

    const formData = new FormData();

    formData.append("file", file);
    console.log(formData);
    const { data } = await api.post("/files", { file: formData }, headers);
    console.log(data);
    const create = {
      imageId: data.imageId,
      title,
      description
    };

    await api.post("/found-object", create);

    await fetchObjectsList();
  };

  useEffect(() => {
    fetchObjectsList();
  }, []);

  return (
    <>
      <Header />

      {showFormBox ? (
        <div className="main-container">
          <FormBox
            actionButton={handleFormBox}
            formValues={formValues}
            handleChange={handleFormValues}
            handleSave={createObject}
          />
        </div>
      ) : (
        <>
          <div className="main-container">
            <AppBar actionButton={handleFormBox} />
          </div>
          <div align="center">
            {objectsFound.length > 0 ? (
              <div className="card-container">
                {objectsFound.map((item, index) => (
                  <Card key={index + item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <img src={empty} alt="Não há objetos cadastrados" />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export { Main };
