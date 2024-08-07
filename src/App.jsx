import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { HomePage } from "./Pages/Home/HomePage";
import { GenratePage } from "./Pages/Genrate/GenratePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/GenrateTrip" element={<GenratePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
