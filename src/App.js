import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const [alertData, setAlretData] = useState(null);

  const handleAlert = (data) => {
    setAlretData(data);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setAlretData({
        variant: "light",
        message: "Dark mode enableed",
      });
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlretData({
        variant: "dark",
        message: "Light mode enabled",
      });
    }
  };

  return (
    <div className="App">
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alertData={alertData} />
      <TextForm heading="Enter the text to analyze" handleAlert={handleAlert} />
    </div>
  );
}

export default App;
