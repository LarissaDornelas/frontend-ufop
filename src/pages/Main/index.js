import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { AppBar } from "../../components/AppBar";
import { FormBox } from "../../components/FormBox";
import { Card } from "../../components/Card";

import empty from "../../assets/images/empty.png";
import "./styles.scss";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [showFormBox, setShowFormBox] = useState(false);
  const [objectsFound, setObjectsFound] = useState([]);
  const [formValues, setFormValues] = useState({
    image: null,
    title: "",
    description: "",
    phone: ""
  });

  const handleFormValues = e => {
    const values = { ...formValues };
    if (e.target.name === "image") {
      values[e.target.name] = e.target.files[0];
    } else {
      values[e.target.name] = e.target.value;
    }

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
    setLoading(true);
    e.preventDefault();
    const { title, description, phone } = formValues;

    let formData = new FormData();
    formData.append("file", formValues.image);

    let { data } = await api.post("/files", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    const create = {
      imageId: data,
      title,
      description,
      phone
    };

    await api.post("/found-object", create);
    await fetchObjectsList();
    setLoading(false);
    setShowFormBox(false);
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
            loading={loading}
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
                {objectsFound.map(item => (
                  <Card key={Math.random()} item={item} />
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
