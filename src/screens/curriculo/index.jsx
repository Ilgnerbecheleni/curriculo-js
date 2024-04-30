import React, { useState } from "react";
import Forms from "../../components/Forms";

function Curriculo() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <h1>Curriculo</h1>
      <Forms page={currentPage} setCurrentPage={setCurrentPage} />
      <div className="d-flex justify-content-evenly w-100">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="btn btn-primary"
        >
          Anterior
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === 3}
          className="btn btn-primary"
        >
          Próximo
        </button>
      </div>
    </>
  );
}

export default Curriculo;
