import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SongSearch from "./components/SongSearch";

ReactDOM.render(
  <BrowserRouter>
    <SongSearch />
  </BrowserRouter>,
  document.getElementById("root")
);
