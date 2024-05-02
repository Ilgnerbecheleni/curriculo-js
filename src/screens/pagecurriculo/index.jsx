import React, { useState, useEffect } from "react";
import LoadingScreen from "../../components/Documento/Anima";

function PageCurriculo() {
  const [redirectToCurriculo, setRedirectToCurriculo] = useState(false);
  const [habilidades, setHabilidades] = useState([]);
  const [formacoes, setFormacoes] = useState([]);
  const [experiencias, setExperiencias] = useState([]);
  const [dados, setDados] = useState({});

  useEffect(() => {
    const savedHabilidades = JSON.parse(localStorage.getItem('habilidades')) || [];
    const savedFormacoes = JSON.parse(localStorage.getItem('formacoes')) || [];
    const savedExperiencias = JSON.parse(localStorage.getItem('experiencias')) || [];
    const savedDados = JSON.parse(localStorage.getItem('dados')) || {};
    
    setHabilidades(savedHabilidades);
    setFormacoes(savedFormacoes);
    setExperiencias(savedExperiencias);
    setDados(savedDados);
    
    if (savedHabilidades.length === 0 || savedFormacoes.length === 0 || savedExperiencias.length === 0) {
      setRedirectToCurriculo(true);
    }
  }, []);

  if (redirectToCurriculo) {
    window.location.replace('/curriculo');
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="mb-5">
        <h1>Seu currículo</h1>
        <LoadingScreen dados={dados} experiencias={experiencias} formacoes={formacoes} habilidades={habilidades}/>
      </div>
    </div>
  );
}

export default PageCurriculo;
