import React from "react";
import "./Layout.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <div className="dashboard">
      <Header />
      <div className="layout__container">
        <aside className="container__sidebar">
          <Sidebar />
        </aside>
        <main className="container__main">{children}</main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Layout;
