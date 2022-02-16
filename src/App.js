import React, {Fragment, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./components/AppRoutes";
import "./App.scss"

export default function App(props) {
  return (
          <BrowserRouter>
              <Header />
              <div className="content">
                  <AppRoutes />
              </div>
              <Footer />
          </BrowserRouter>
  );
}
