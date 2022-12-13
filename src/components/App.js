import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectMovie from "./SelectMovie";
import SelectSession from "./SelectSession";
import SelectSeat from "./SelectSeat";
import Banner from "./Banner";
import SuccessPage from "./SuccessPage";

function App() {

  return (
    <BrowserRouter>
      <Banner/>
      <Routes>
        <Route path="/" element={<SelectMovie/>}/>
        <Route path="/sessoes/:movieId" element={<SelectSession/>}/>
        <Route path="/assentos/:sessionId" element={<SelectSeat/>}/>
        <Route path="/sucesso" element={<SuccessPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
