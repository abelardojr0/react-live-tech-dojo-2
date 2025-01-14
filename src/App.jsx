import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Barbeiros } from "./pages/Barbeiros";
import { Servicos } from "./pages/Servicos";
import { Atendimentos } from "./pages/Atendimentos";
import { Page404 } from "./pages/Page404";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./globalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/barbeiros" element={<Barbeiros />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/atendimentos" element={<Atendimentos />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
