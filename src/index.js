import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Biodata from "./component/Biodata";
import UserAccount from "./component/UserAccount";
import Resolusi from "./component/Resolusi";
import Tombol from "./component/Tombol";
import Kendaraan from "./component/Kendaraan";
import Container from "./component/Container";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Biodata /> 
     <UserAccount /> 
    <Resolusi />
    <Tombol />
    <Kendaraan jenis="Motor" merk1="Honda" merk2="Yamaha" merk3="Suzuki" />
    <Kendaraan jenis="Mobil" merk1="Honda" merk2="Mitsubishi" merk3="Tesla" />  */}

    <Container />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
