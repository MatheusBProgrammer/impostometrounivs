import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://impostometro.com.br/widget/contador/";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="App">
      <div id="iframe-container">
        <iframe
          src="https://impostometro.com.br/widget/contador/"
          width="1000"
          frameBorder="0"
          title="Impostômetro"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}

export default App;
