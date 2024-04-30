import React, { useState } from "react";
import { IoSaveSharp } from "react-icons/io5";


function FormDados({ dados, setDados, setCurrentPage }) {
  const [formData, setFormData] = useState(dados || {
    nome: '',
    dataNascimento: '',
    idade: 0,
    email: '',
    estadoCivil: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDados(formData);
    setCurrentPage(2);
  };

  return (
    <div className="container">
      <h4>Dados</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            placeholder="Data de Nascimento"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            placeholder="Idade"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
            placeholder="Estado Civil"
          />
        </div>
        <button type="submit" className="btn btn-primary m-4"><IoSaveSharp size={24} color={"white"}/></button>
        
      </form>
    </div>
  );
}

export default FormDados;
