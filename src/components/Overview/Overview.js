import React, {useContext} from "react";
import Charts from "../Charts/Charts";
import "./Overview.scss";
import { userContext } from "../../Context/UserContextProvider";
import { nFormatter } from "../../helpers";
const Overview = () => {
  const {user}=useContext(userContext)

  return (
    <div className="overview-container">
      <div className="overview-title">Overview </div>
      <div className="overview-info">
        <div className="overview-info-detail">
          <span>Total Balance: USD {nFormatter( user.totalbalance, 1)}</span>
          <span>Revenue: USD {nFormatter( user.revenue, 0)}</span>
        </div>
      </div>
      <div className="overview-chart-styles">
        <Charts data={user.transactions} tooltip={true} />
      </div>
      <div className="overview-info-detail">
        <span>total transactions: {user.transactions.length} complited</span>
      </div>
    </div>
  );
};

export default Overview;
