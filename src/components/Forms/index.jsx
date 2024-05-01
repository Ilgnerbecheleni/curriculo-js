import { useState } from 'react';
import FormDados from './Dados/index.jsx';

import FormFormacoes from './Formacoes/index.jsx';
import FormExperiencias from './Experiencias/index.jsx';
import FormHabilidades from './Habilidades/index.jsx';



function Forms({ page , setCurrentPage }) {
    
    const [dados , setDados] = useState();
    const [experiencias, setExperiencias] = useState([]);
    const [formacoes, setFormacoes] = useState([]);
    const [habilidades, setHabilidades] = useState([]);

    function render(pagina) {
        switch (pagina) {
            case 1:
                return <FormDados dados={dados} setDados={setDados} setCurrentPage= {setCurrentPage}/>;
            case 2:
                return <FormExperiencias experiencias={experiencias}  setExperiencias={setExperiencias}  setCurrentPage={setCurrentPage}/>;
            case 3:
                    return <FormFormacoes setCurrentPage= {setCurrentPage} setFormacoes={setFormacoes} formacoes={formacoes}/>;
            case 4:
                    return <FormHabilidades setCurrentPage= {setCurrentPage} setFormacoes={setHabilidades} formacoes={habilidades}/>;        
            default:
                return null; // Tratamento para outros casos, se necessário
        }
    }

    const renderedForm = render(page);

    return (
        <>
            {renderedForm}
        </>
    );
}

export default Forms;
