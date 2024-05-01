import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTrash } from 'react-icons/fa';
import { MdKeyboardReturn } from 'react-icons/md';
function FormFormacoes({ formacoes, setFormacoes, onSubmit, setCurrentPage }) {
  const [novaFormacao, setNovaFormacao] = useState({
    instituicao: '',
    tipoCurso: 'Ensino Médio',
    curso: '',
    inicio: '',
    fim: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNovaFormacao(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const novaFormacaoCompleta = { ...novaFormacao };
    setFormacoes(prevFormacoes => [...prevFormacoes, novaFormacaoCompleta]);
    onSubmit(novaFormacaoCompleta);
    // Resetar o estado do formulário após a submissão, se necessário
    setNovaFormacao({
      instituicao: '',
      tipoCurso: 'Ensino Médio',
      curso: '',
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
    <div className='container'>
       <div className="container m-3 d-flex justify-content-between align-items-center">
     <button className="btn btn-primary" onClick={()=>{setCurrentPage(2)}}> <FaArrowAltCircleLeft /></button>
     <button className="btn btn-dark" onClick={()=>{setCurrentPage(4)}}> <FaArrowAltCircleRight /></button>
      </div>
      <h4>Adicionar Formação</h4>
      <div className={styles.formacoeslist}>
        {formacoes.map((formacao, index) => (
          <div key={index} className='container'>
            <p>Instituição: {formacao.instituicao}</p>
            <p>Tipo de Curso: {formacao.tipoCurso}</p>
            <p>Curso: {formacao.curso}</p>
            <button onClick={() => handleDelete(index)} className='btn btn-danger'><FaTrash /></button>
            <hr />
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="instituicao"
            placeholder="Instituição"
            className="form-control"
            value={novaFormacao.instituicao}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <select
            name="tipoCurso"
            className="form-select"
            aria-label="Tipo de curso"
            value={novaFormacao.tipoCurso}
            onChange={handleChange}
          >
            <option value="Ensino Médio">Ensino Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós Graduação">Pós Graduação</option>
            <option value="Técnico">Técnico</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="curso"
            placeholder="curso"
            className="form-control"
            value={novaFormacao.curso}
            onChange={handleChange}
          />

        </div>
        <div className="mb-3">
          <input
            type="date"
            name="inicio"
            placeholder="Início"
            className="form-control"
            value={novaFormacao.inicio}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="fim"
            placeholder="Fim"
            className="form-control"
            value={novaFormacao.fim}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Adicionar Formação</button>
      </form>
      <div>
     
      </div>
    </div>
  );
}

export default FormFormacoes;
