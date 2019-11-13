import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { AppBar } from "../../components/AppBar";
import { FormBox } from "../../components/FormBox";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import empty from "../../assets/images/empty.png";
import { MainContainer, Empty, CardsContainer } from "./styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [showFormBox, setShowFormBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [foundObjects, setFoundObjects] = useState([]);
  const [searchValue, setSearchValue] = useState("");
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

  const fetchObjectList = async () => {
    const { data } = await api.get("/found-object");
    setFoundObjects(data);
  };

  const handleSave = async e => {
    setLoading(true);
    e.preventDefault();
    const { image, title, description, phone } = formValues;

    const formData = new FormData();
    formData.append("file", image);

    try {
      const { data } = await api.post("/files", formData, {
        headers: { "content-type": "multpart/form-data" }
      });

      const create = {
        imageId: data,
        title,
        description,
        phone
      };

      await api.post("/found-object", create);
      setLoading(false);
      fetchObjectList();
      setShowFormBox(false);
      toast.success("Objeto cadastrado com sucesso");
    } catch (err) {
      toast.error("Erro ao cadastrar objeto");
    }
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

  const handleSearch = e => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  useEffect(() => {
    async function search() {
      if (searchValue.length > 3) {
        const { data } = await api.get(`/found-object?busca=${searchValue}`);
        setFoundObjects(data);
      } else if (searchValue.length === 0) {
        fetchObjectList();
      }
    }
    search();
  }, [searchValue]);

  useEffect(() => {
    fetchObjectList();
  }, []);

  return (
    <>
      <Header />

      {showFormBox ? (
        <MainContainer>
          <FormBox
            handleFormBox={handleFormBox}
            formValues={formValues}
            handleFormValues={handleFormValues}
            loading={loading}
            handleSave={handleSave}
          />
        </MainContainer>
      ) : (
        <>
          <MainContainer>
            <AppBar handleFormBox={handleFormBox} handleSearch={handleSearch} />
          </MainContainer>
          <div align="center">
            {foundObjects.length > 0 ? (
              <CardsContainer>
                {foundObjects.map(item => (
                  <Card key={Math.random()} item={item} />
                ))}
              </CardsContainer>
            ) : (
              <Empty>
                <img src={empty} alt="Não há objetos cadastrados" />
              </Empty>
            )}
          </div>
        </>
      )}
    </>
  );
};

export { Main };
