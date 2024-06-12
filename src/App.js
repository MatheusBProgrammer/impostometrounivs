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
          title="Impostômetro"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
