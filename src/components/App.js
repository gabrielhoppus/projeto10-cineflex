import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectMovie from "./SelectMovie";
import SelectSession from "./SelectSession"
import Banner from "./Banner";

function App() {
  return (
    <BrowserRouter>
      <Banner/>
      <Routes>
        <Route path="/" element={<SelectMovie/>}/>
        <Route path="/sessoes/:movieId" element={<SelectSession/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
