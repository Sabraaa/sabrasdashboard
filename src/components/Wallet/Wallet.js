import React from "react";
import "./Wallet.scss";

const Wallet = ({ usd, balance, name, image }) => {

  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} alt="..." className="img-fluid rounded-start wallet-avatar" />
          </div>
          <div className="col-md-8">
            <div className="card-body wallet-body">
              <h5 className="card-title wallet-body">{name}</h5>
              <p className="card-text">Balance: {balance.toLocaleString()}</p>
              <p className="card-text">
                <small className="text-muted">
                  USD: ${usd.toLocaleString()}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
