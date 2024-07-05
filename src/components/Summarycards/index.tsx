import "./style.css";

export const Summarycards = ({
  totalAmount,
  totalVendors,
  avgAmount,
  totalTransactions,
}: {
  totalAmount: number;
  totalVendors: number;
  avgAmount: number;
  totalTransactions: number;
}) => {
  return (
    <div className="cards_container">
      <div className="info_card">
        <h4>Driver's Earnings</h4>
        <div>
          <h2>${totalAmount.toFixed(2)}</h2>
        </div>
      </div>
      <div className="info_card">
        <h4>Total Vendors</h4>
        <div>
          <h2>{totalVendors}</h2>
        </div>
      </div>
      <div className="info_card">
        <h4>Avg. Fare Amount</h4>
        <div>
          <h2>${avgAmount.toFixed(2)}</h2>
        </div>
      </div>
      <div className="info_card">
        <h4>Total Transactions</h4>
        <div>
          <h2>{totalTransactions}</h2>
        </div>
      </div>
    </div>
  );
};
