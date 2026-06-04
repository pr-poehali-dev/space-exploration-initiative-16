import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Experience from "./pages/Experience";
import Philosophy from "./pages/Philosophy";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/philosophy" element={<Philosophy />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
