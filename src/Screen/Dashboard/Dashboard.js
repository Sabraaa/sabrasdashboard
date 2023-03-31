import React, { useContext } from "react";
import "./Dashboard.scss";
import Overview from "../../components/Overview/Overview";
import Wallet from "../../components/Wallet/Wallet";
import { userContext } from "../../Context/UserContextProvider";
import Transaction from "../../components/Transaction/Transaction";

const Dashboard = () => {
  const { user } = useContext(userContext);

  return (
    <div className="dashboard-container">
      <div className="dashboard-overview">
        <Overview />
      </div>
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
      <div className="dashboard-transaction"> <Transaction/> </div>
    </div>
  );
};

export default Dashboard;
