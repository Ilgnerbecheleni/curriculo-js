import React, { useState } from "react";
import Forms from "../../components/Forms";

function Curriculo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <h1>Curriculo</h1>
      <Forms page={currentPage} setCurrentPage={setCurrentPage} />
     
    </>
  );
}

export default Curriculo;
