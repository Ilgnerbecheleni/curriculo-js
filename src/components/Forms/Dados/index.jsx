import React, { useState, useEffect } from "react";
import { IoSaveSharp } from "react-icons/io5";

function FormDados({ dados, setDados, setCurrentPage }) {
  const [formData, setFormData] = useState(dados || {
    nome: '',
    dataNascimento: '',
    idade: 0,
    email: '',
    estadoCivil: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('dados');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dados', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "dataNascimento") {
      // Calcular idade a partir da data de nascimento
      const dataNascimento = new Date(value);
      const hoje = new Date();
      const idade = hoje.getFullYear() - dataNascimento.getFullYear();
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
        idade: idade
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
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
          <select
            className="form-select"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
            placeholder="Estado Civil"
          >
            <option value="">Selecione o estado civil</option>
            <option value="Solteiro">Solteiro</option>
            <option value="Casado">Casado</option>
            <option value="Divorciado">Divorciado</option>
            <option value="Viúvo">Viúvo</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary m-4"><IoSaveSharp size={24} color={"white"} /></button>
      </form>
    </div>
  );
}

export default FormDados;
