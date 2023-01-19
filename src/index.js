import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// React router dom
import { BrowserRouter } from "react-router-dom";

// Components
import PageFooter from "./components/footer/footer";
import PageHeader from "./components/header/header";

// Style
import "./index.css";
import "./style/index.scss"


// const header = ReactDOM.createRoot(document.getElementById("header"));
// header.render(
//  <React.StrictMode>
//   <PageHeader />
//  </React.StrictMode>
// );

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
 <React.StrictMode>
  <BrowserRouter>
  <PageHeader />
    <App />
   <PageFooter />
  </BrowserRouter>
 </React.StrictMode>
);

// const footer = ReactDOM.createRoot(document.getElementById("footer"));
// footer.render(
//  <React.StrictMode>
//   <PageFooter />
//  </React.StrictMode>
// );
reportWebVitals();
