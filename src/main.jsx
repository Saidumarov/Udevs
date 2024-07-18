import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AnimationProvider from "./components/context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AnimationProvider>
      <App />
    </AnimationProvider>
  </BrowserRouter>
);
