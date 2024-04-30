import React, { useState } from 'react';

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

  return (
    <div>
      <h1>Adicionar Formação</h1>
      <div>
        {formacoes.map((formacao, index) => (
          <div key={index}>
            <p>Instituição: {formacao.instituicao}</p>
            <p>Tipo de Curso: {formacao.tipoCurso}</p>
            <p>Curso: {formacao.curso}</p>
            <p>Início: {formacao.inicio}</p>
            <p>Fim: {formacao.fim}</p>
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
          <textarea
            name="curso"
            placeholder="Curso"
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
    
    </div>
  );
}

export default FormFormacoes;
