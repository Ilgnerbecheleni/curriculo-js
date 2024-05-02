/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTrash } from "react-icons/fa";
import { MdKeyboardReturn } from "react-icons/md";

function FormExperiencias({ setCurrentPage }) {
  const [experiencias, setExperiencias] = useState([]);
  const [contador, setContador] = useState(0);
  const [novaExperiencia, setNovaExperiencia] = useState({
    local: '',
    cargo: '',
    descricao: '',
    inicio: '',
    fim: '',
    fimAtual: false, // Novo estado para o checkbox
  });



  // Carregar dados do localStorage quando o componente é montado
  useEffect(() => {
    const savedExperiencias = localStorage.getItem("experiencias");
    console.log(savedExperiencias)
    if (savedExperiencias) {
      console.log(savedExperiencias)
      setExperiencias(JSON.parse(savedExperiencias));
     setContador(contador+1);
    }
  }, []); // Executa apenas uma vez na montagem do componente

  // Salvar dados no localStorage sempre que 'experiencias' for atualizado
  useEffect(() => {
    if(contador >2){
      localStorage.setItem("experiencias", JSON.stringify(experiencias));
    }else
    setContador(3)
   
  }, [experiencias]); // Apenas quando 'experiencias' muda

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setNovaExperiencia((prevExperiencia) => ({
      ...prevExperiencia,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const experienciaToAdd = { ...novaExperiencia };
    if (novaExperiencia.fimAtual) {
      experienciaToAdd.fim = "Até o momento";
    }
    setExperiencias((prevExperiencias) => [...prevExperiencias, experienciaToAdd]);

    setNovaExperiencia({
      local: "",
      cargo: "",
      descricao: "",
      inicio: "",
      fim: "",
      fimAtual: false,
    });
  };

  const handleDelete = (index) => {
    if (confirm("Deseja excluir a Experiencia?")) {
      setExperiencias((prevExperiencias) => prevExperiencias.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container">
      <div className="container mb-3 d-flex justify-content-between align-items-center">
        <button className="btn btn-primary" onClick={() => setCurrentPage(1)}>
          <FaArrowAltCircleLeft />
        </button>
        <button className="btn btn-dark" onClick={() => setCurrentPage(3)}>
          <FaArrowAltCircleRight />
        </button>
      </div>
      <h4>Experiencias</h4>
      <div className="container w-100">
        
          {experiencias.map((experiencia, index) => (
            <div key={index} className="container " >
           <p className='m-0'>  <strong>Local:</strong> {experiencia.local}</p>
           <p className='m-0'>  <strong>Cargo:</strong> {experiencia.cargo}</p>
           <button onClick={() => handleDelete(index)} className="btn btn-danger mt-2">
           <FaTrash />
           </button>
           <hr />           
            </div>
          ))}
        
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="local"
            value={novaExperiencia.local}
            onChange={handleChange}
            placeholder="Local"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="cargo"
            value={novaExperiencia.cargo}
            onChange={handleChange}
            placeholder="Cargo"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="descricao"
            value={novaExperiencia.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="inicio"
            value={novaExperiencia.inicio}
            onChange={handleChange}
            placeholder="Início"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="fim"
            value={novaExperiencia.fim}
            onChange={handleChange}
            placeholder="Fim"
            className="form-control"
          />
          <label className="mt-3">
            <input type="checkbox" name="fimAtual" checked={novaExperiencia.fimAtual} onChange={handleChange} />
            Até o momento
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar Experiência
        </button>
      </form>
    </div>
  );
}

export default FormExperiencias;
