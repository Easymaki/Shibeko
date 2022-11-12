import Header from "./Components/Header/Header";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="mainContent">
          <Routes>
            <Route path="/main/*" />
            <Route path="/" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
