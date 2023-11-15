import logo from "./logo.svg";
import "./App.css";
import FirstPage from "./components/FirstPage.js";
import SecondPage from "./components/SecondPage.js";
import ThirdPage from "./components/ThirdPage.js";
import FourthPage from "./components/fourthPage.js";
import FifthPage from "./components/fifthPage.js";
import LastPage from "./components/LastPage.js";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    document.title= "Pflegeaktiv24"
  })
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <LastPage />
    </div>
  );
}

export default App;
