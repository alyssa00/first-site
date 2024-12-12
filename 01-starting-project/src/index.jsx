import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// React.createElement() functions the same as JSX code
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));