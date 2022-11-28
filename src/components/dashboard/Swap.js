import "./dashboard.css";

function Swap(props) {
  return (
    <div class="buy">
        <h1>Swap</h1>
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
      <button >Execute</button>
      <button onClick= {()=>props.handlePrevious()}>Previous</button>

    </div>
  );
}

export default Swap;
