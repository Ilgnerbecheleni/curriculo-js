import { Route, Routes } from 'react-router-dom'
import Home from './screens/home'
import Dicas from './screens/dicas'
import Curriculo from './screens/curriculo'
import React from 'react'
import PageCurriculo from './screens/pagecurriculo'

function Rotas() {
  return (

 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dicas" element={<Dicas />} />
    <Route path="/curriculo" element={<Curriculo />} />
    <Route path="/pagecurriculo" element={<PageCurriculo />} />
    </Routes>

  )
}

export default Rotas
