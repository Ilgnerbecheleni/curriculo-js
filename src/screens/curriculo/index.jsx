import React, { useState } from "react";
import Forms from "../../components/Forms";

function Curriculo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container mt-5 pt-5">
      <div className="mb-5">
      <Forms page={currentPage} setCurrentPage={setCurrentPage} />
      </div>
     
     
    </div>
  );
}

export default Curriculo;
