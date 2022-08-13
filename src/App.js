// import logo from './logo.svg';
import "./App.css";
// import FileUploadPage from "./components/FileUploadPage";
import { useState, useEffect } from "react";
import { loadWASM, add } from "./wasm/wasmloader";

const App = (props) => {
  const [wasmLoaded, setWasmLoaded] = useState(false);
  useEffect(() => {
    loadWASM().then((result) => setWasmLoaded(result));
  }, []);

  useEffect(() => {
    if (wasmLoaded) {
      console.log("el resultado de wasm es", add(2, 2));
    }
  }, [wasmLoaded]);

  return (
    <div className="App">
      Hola mundo
      {/* <FileUploadPage /> */}
    </div>
  );
};

export default App;
