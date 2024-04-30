import { useState } from 'react';
import FormDados from './Dados/index.jsx';

import FormFormacoes from './Formacoes/index.jsx';
import FormExperiencias from './Experiencias/index.jsx';



function Forms({ page , setCurrentPage }) {
    
    const [dados , setDados] = useState();
    const [experiencias, setExperiencias] = useState([]);
    const [formacoes, setFormacoes] = useState([]);

    function render(pagina) {
        switch (pagina) {
            case 1:
                return <FormDados dados={dados} setDados={setDados} setCurrentPage= {setCurrentPage}/>;
            case 2:
                return <FormExperiencias experiencias={experiencias}  setExperiencias={setExperiencias}  />;
            case 3:
                    return <FormFormacoes setCurrentPage= {setCurrentPage} setFormacoes={setFormacoes} formacoes={formacoes}/>;
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
