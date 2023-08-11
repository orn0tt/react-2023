import { Route, Routes } from "react-router-dom";

function AppRouter() {
  var coisa;

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/empresa" element={<Empresa />}></Route>
      <Route path="/noticias" element={<Noticias />}></Route>
      <Route path="/sobre" element={<Sobre />}></Route>
      <Route path="/contato" element={<Contato />}></Route>
    </Routes>
  );
}

export default AppRouter;
