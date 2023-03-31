import React, { useState, createContext, useEffect } from "react";
import avatar from "../assets/profile.jpg";
import Wallet1 from "../assets/wallet1.png";
import wallet2 from "../assets/wallet2.png";

export const userContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(()=>{
      let defaultData ={
        name: "Sabra",
        fname: "Akhavan",
        email: "sabraxavan@gmail.com",
        avatar: avatar,
        password: "123456",
        status: "offline",
        totalbalance: 12345752.1,
        revenue: 14000,
        transactions: [
          {
            Sell: 2000,
            Buy: 2400,
          },
          {
            Sell: 4000,
            Buy: 1398,
          },
          {
            Sell: 5000,
            Buy: 12400,
          },
          {
            Sell: 52000,
            Buy: 16400,
          },
          {
            Sell: 4500,
            Buy: 400,
          },
          {
            Sell: 12000,
            Buy: 12400,
          },
          {
            Sell: 15000,
            Buy: 13000,
          },
          {
            Sell: 2000,
            Buy: 2400,
          },
          {
            Sell: 4000,
            Buy: 1398,
          },
          {
            Sell: 5000,
            Buy: 12400,
          },
          {
            Sell: 2000,
            Buy: 16400,
          },
          {
            Sell: 4500,
            Buy: 400,
          },
          {
            Sell: 12000,
            Buy: 12400,
          },
          {
            Sell: 15000,
            Buy: 13000,
          },
        ],
        wallets: [
          {
            id: 1,
            name: "Bitcoin",
            balance: "1,712.10",
            usd: 9241123.54,
            image: Wallet1,
          },
          {
            id: 2,
            name: "Ethereum",
            balance: "1,014.10",
            usd: 54272.54,
            image: wallet2,
          },
        ],
      }
      const localStore = localStorage.getItem("user")
        if (localStore) {
          defaultData = JSON.parse(localStore)
        }
        return defaultData


  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))

  }, [user])
  

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
