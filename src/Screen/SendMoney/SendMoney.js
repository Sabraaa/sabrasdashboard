import React, { useContext, useState } from "react";
import "./sendMoney.scss";
import Wallet from "../../components/Wallet/Wallet";
import { userContext } from "../../Context/UserContextProvider";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastify } from "../../components/Toastify/Toastify";

const SendMoney = () => {
  // STATES
  const { user, setUser } = useContext(userContext);
  const [selectedOption, setSelectedOption] = useState({
    label: "Ethereum",
    value: "Ethereum",
  });
  const [formVal, setFormVal] = useState({
    Amount: 0,
    Reciever: "",
    selectedWallet: selectedOption.value,
  });

  const wallets = user.wallets;
  let userWallet = wallets.find((item) => item.name === selectedOption.label);
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (userWallet.usd >= formVal.Amount) {
      userWallet.usd = userWallet.usd - formVal.Amount;
      setUser((prev) => {
        return {
          ...prev,
          wallets: [
            ...prev.wallets.filter((wallet) => {
              return wallet.name !== selectedOption.value;
            }),
            userWallet,
          ],
        };
      });
    } else {
      toastify("Account balance is not enough");
    }
  };

  const onchangeHandler = (e) => {
    setSelectedOption({
      label: e.value,
      value: e.value,
    });
    setFormVal({ ...formVal, selectedWallet: e.value });
  };

  const options = wallets.map((wallet) => {
    return { label: wallet.name, value: wallet.name };
  });

  return (
    <div>
      <div className="row dashboard-wallet">
        {user.wallets.map((wallet) => (
          <div className="col-12 col-md-6 " key={wallet.id}>
            <Wallet
              image={wallet.image}
              name={wallet.name}
              balance={wallet.balance}
              usd={wallet.usd}
            />
          </div>
        ))}
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="sendmoney-select-container">
          <div className="form-wrapper">
            <span className="select-your-wallet"> Select your wallet: </span>
            <Select
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#d8b4a7",
                  primary: "#D1C7BE",
                },
              })}
              options={options}
              defaultValue={options[0]}
              value={selectedOption}
              onChange={onchangeHandler}
            />
            <div className="sendmoney-input-wrapper">
              <input
                className="sendmoney-input"
                type="text"
                placeholder="Amount"
                onChange={(e) => {
                  setFormVal({ ...formVal, Amount: e.target.value });
                }}
              />
              <input
                className="sendmoney-input"
                type="text"
                onChange={(e) => {
                  setFormVal({ ...formVal, Reciever: e.target.value });
                }}
                placeholder="Reciever Address"
              />
            </div>
          </div>
          <div className="sendmoney-button-container">
            <button type="submit" className="sendmoney-button">
              Substitute
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMoney;
