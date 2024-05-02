/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTrash } from 'react-icons/fa';
import { MdKeyboardReturn } from 'react-icons/md';

function FormFormacoes({ formacoes, setFormacoes, onSubmit, setCurrentPage }) {
  const [contador, setContador] = useState(0);
  const [novaFormacao, setNovaFormacao] = useState({
    instituicao: '',
    tipoCurso: 'Ensino Médio',
    curso: '',
    inicio: '',
    fim: ''
  });

  const [ateOMomento, setAteOMomento] = useState(false); // Estado para controlar se o checkbox "Até o momento" está selecionado

  // Carregar o estado inicial do localStorage ou inicializar com um array vazio se não houver dados salvos
  useEffect(() => {
    const savedFormacoes = localStorage.getItem('formacoes');
    if (savedFormacoes) {
      setFormacoes(JSON.parse(savedFormacoes));
      setContador(contador+1)
    }
  }, []);

  // Atualizar o localStorage sempre que o array de formacoes for alterado
  useEffect(() => {
    if(contador >2){
      localStorage.setItem('formacoes', JSON.stringify(formacoes));
    }
    setContador(3)
  }, [formacoes]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNovaFormacao(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = () => {
    setAteOMomento(prevState => !prevState); // Inverte o estado do checkbox "Até o momento"
    
    // Se o checkbox "Até o momento" estiver marcado, preenche o campo de fim com a frase "até o momento"
    if (!ateOMomento) {
      setNovaFormacao(prevState => ({
        ...prevState,
        fim: 'até o momento'
      }));
    } else {
      // Se o checkbox for desmarcado, limpa o campo de fim
      setNovaFormacao(prevState => ({
        ...prevState,
        fim: ''
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se o número de formações é menor que 3 antes de adicionar uma nova formação
    if (formacoes.length < 3) {
      const novaFormacaoCompleta = { ...novaFormacao };
      setFormacoes(prevFormacoes => [...prevFormacoes, novaFormacaoCompleta]);
      onSubmit(novaFormacaoCompleta);
      // Resetar o estado do formulário após a submissão
      setNovaFormacao({
        instituicao: '',
        tipoCurso: 'Ensino Médio',
        curso: '',
        inicio: '',
        fim: ''
      });
      setAteOMomento(false); // Desmarcar o checkbox "Até o momento" após a submissão
    } else {
      alert('Limite máximo de formações atingido (3).');
    }
  };

  const handleDelete = (index) => {
    if(confirm('Deseja excluir a formação?')){
      setFormacoes(prevFormacoes => prevFormacoes.filter((_, i) => i !== index));
    }
  };

  return (
    <div className='container'>
       <div className="container mb-3 d-flex justify-content-between align-items-center">
         <button className="btn btn-primary" onClick={() => setCurrentPage(2)}> <FaArrowAltCircleLeft /></button>
         <button className="btn btn-dark" onClick={() => setCurrentPage(4)}> <FaArrowAltCircleRight /></button>
      </div>
      <h4>Adicionar Formação</h4>
      <div className={styles.formacoeslist}>
        {formacoes.map((formacao, index) => (
          <div key={index} className='container'>
            <p className='m-0'>Instituição: {formacao.instituicao}</p>
            <p className='m-0'>Formação: {formacao.tipoCurso}</p>
            <p className='m-0'>Curso: {formacao.curso}</p>
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
            disabled={ateOMomento} // Desabilita o campo de fim se o checkbox "Até o momento" estiver marcado
          />
          <label>
            <input
              type="checkbox"
              checked={ateOMomento}
              onChange={handleCheckboxChange}
              className="mt-3"
            />
            Até o momento
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Adicionar Formação</button>
      </form>
    </div>
  );
}

export default FormFormacoes;
