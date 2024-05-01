import React, { useState } from 'react';

function FormHabilidades() {
  const [habilidades, setHabilidades] = useState([]);
  const [novaHabilidade, setNovaHabilidade] = useState('');

  const adicionarHabilidade = () => {
    if (novaHabilidade.trim() !== '' && !habilidades.includes(novaHabilidade)) {
      setHabilidades([...habilidades, novaHabilidade]);
      setNovaHabilidade('');
    }
  };

  const removerHabilidade = (habilidade) => {
    setHabilidades(habilidades.filter((item) => item !== habilidade));
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <h4 className="mb-3">Habilidades</h4>
      <div className="container">
        <div className="col-md-6">
          <label htmlFor="habilidades" className="form-label">Selecione suas habilidades:</label>
       
          <select
            value={novaHabilidade}
            onChange={(e) => setNovaHabilidade(e.target.value)}
            className="form-select mb-3"
            aria-label="habilidades"
          >
           <option value="comunicacao_eficaz">Comunicação eficaz (oral e escrita)</option>
        <option value="Trabalho em equipe">Trabalho em equipe</option>
        <option value="lideranca">Liderança</option>
        <option value="Resolução de problemas">Resolução de problemas</option>
        <option value="Pensamento crítico">Pensamento crítico</option>
        <option value="Aprendizado rápido">Capacidade de aprendizado rápido</option>
        <option value="Adaptabilidade">Adaptabilidade</option>
        <option value="Organização">Organização</option>
        <option value="Gerenciamento do Tempo">Gerenciamento do tempo</option>
        <option value="Iniciativa">Iniciativa</option>
        <option value="Criatividade">Criatividade</option>
        <option value="Conhecimentos em Informática">Conhecimentos de informática</option>
        <option value="Empatia">Empatia</option>
        <option value="Flexibilidade">Flexibilidade</option>
        <option value="Tomada de decisões">Capacidade de tomar decisões</option>
        <option value="Atendimento ao cliente">Atendimento ao cliente</option>
        <option value="Analise de dados">Análise de dados</option>
        <option value="Negociação">Habilidades de negociação</option>
    
     
       
          </select>
          <button onClick={adicionarHabilidade} className="btn btn-primary mb-3">Adicionar Habilidade</button>
        </div>
      </div>
     <div className='container'>
     <ul className="list-group">
        {habilidades.map((habilidade, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {habilidade}
            <button onClick={() => removerHabilidade(habilidade)} className="btn btn-danger">Excluir</button>
          </li>
        ))}
      </ul>
     </div>
    </div>
  );
}

export default FormHabilidades;
