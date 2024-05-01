import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTrash } from "react-icons/fa";
import { MdKeyboardReturn } from "react-icons/md";

function FormExperiencias({ experiencias, setExperiencias , setCurrentPage}) {



  const [novaExperiencia, setNovaExperiencia] = useState({
    local: '',
    cargo: '',
    descricao: '',
    inicio: '',
    fim: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaExperiencia((prevExperiencia) => ({
      ...prevExperiencia,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperiencias((prevExperiencias) => [...prevExperiencias, novaExperiencia]);
    
    setNovaExperiencia({
      local: '',
      cargo: '',
      descricao: '',
      inicio: '',
      fim: ''
    });
  };

  const handleDelete = (index) => {
    if(confirm('Deseja excluir a formaçãoo')){
      setFormacoes(prevFormacoes => prevFormacoes.filter((_, i) => i !== index));
    }
    
  };

  return (
    <div className="container">
      <div className="container m-3 d-flex justify-content-between align-items-center">
     <button className="btn btn-primary" onClick={()=>{setCurrentPage(1)}}> <FaArrowAltCircleLeft /></button>
     <button className="btn btn-dark" onClick={()=>{setCurrentPage(3)}}> <FaArrowAltCircleRight /></button>
      </div>
      <h4>Experiencias</h4>
      <div className="mb-3">
     
        <ul>
          {experiencias.map((experiencia, index) => (
            <li key={index}  className='container'>
              <strong>Local:</strong> {experiencia.local}<br />
              <strong>Cargo:</strong> {experiencia.cargo}<br />
              <button onClick={() => handleDelete(index)} className='btn btn-danger'><FaTrash /></button>
            </li>
          ))}
        </ul>
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
        </div>
        <button type="submit" className="btn btn-primary">Adicionar Experiência</button>
      </form>

    </div>
  );
}

export default FormExperiencias;
