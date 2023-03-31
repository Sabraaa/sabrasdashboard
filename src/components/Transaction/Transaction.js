import React, { useContext } from "react";
import "./Transactions.scss";
import Charts from "../Charts/Charts";
import { userContext } from "../../Context/UserContextProvider";
import { nFormatter } from "../../helpers/index";

const Transaction = () => {
  const { user } = useContext(userContext);
  const buySum = user.transactions.reduce(
    (total, currentValue) => (total = total + currentValue.Buy),
    0
  );
  const sellSum = user.transactions.reduce(
    (total, currentValue) => (total = total + currentValue.Sell),
    0
  );

  return (
    <div>
      <div className="transaction-title"> Transaction</div>
      <div className="transaction-sum">
        <span> You Bought:{nFormatter(buySum, 1)}</span>
        <span> You Sold:{nFormatter(sellSum, 1)}</span>
      </div>
      <div className="transaction-chart">
        <Charts data={user.transactions} tooltip={true} />
      </div>
    </div>
  );
};

export default Transaction;
