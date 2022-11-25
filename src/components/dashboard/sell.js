import "./dashboard.css";

function Sell() {
  return (
    <div class="buy">
      <div>
        <label>Chain</label>
        <select id="chain" name="chain">
          <option value="ethereum">Ethereum</option>
          <option value="polygon">Polygon</option>
        </select>
      </div>
      <div>
        <label>Select a Token</label>
        <select id="token" name="token">
          <option value="ethereum">Ethereum</option>
          <option value="polygon">Polygon</option>
        </select>
      </div>
      <div>
        <label>Enter Amount</label>
        <input type="number" name="amount" />
      </div>
      <button>Next</button>
    </div>
  );
}

export default Sell;
