import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../Screen/Account/Account";
import Dashboard from "../Screen/Dashboard/Dashboard";
import News from "../Screen/News/News";
import SendMoney from "../Screen/SendMoney/SendMoney";
import SingleNews from "../Screen/SingleNews/SingleNews";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Dashboard/>} />
      <Route path="account" element={<Account />} />
      <Route path="news" element={<News />} />
      <Route path="news/:id" element={<SingleNews />} />
      <Route path="sendmoney" element={<SendMoney />} />
      <Route path="*" element={<h2> Not Found!</h2>}/>
    </Routes>
  );
};

export default AppRoutes;
