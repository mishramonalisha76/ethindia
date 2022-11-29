import "./index.css";
import "animate.css";

function BaseComponent(props) {
  const {
    pageState,
    setPageState,
    handleTokenAmount,
    handleTokenNetwork,
    tokenAmountValue,
    tokenNetworkValue,
    handleSubmit,
    heading,
  } = props;

  function getNextPage(page) {
    setPageState(page + 1);
  }
  function getPrevPage(page) {
    setPageState(page - 1);
  }

  function handleAmount(e) {
    handleTokenAmount(e.target.value);
  }
  function handleNetwork(e) {
    handleTokenNetwork(e.target.value);
  }

  return (
    <>
      <div class="defi-container">
        <h2>{heading}</h2>
        <label htmlFor="token-amount">Enter amount</label>
        <input
          id="token-amount"
          type="number"
          onChange={handleAmount}
          value={tokenAmountValue}
          min="0"
        ></input>
        <label htmlFor="token-list">Token</label>
        <select name="token-list" id="token-list">
          <option value="dummy1">Dummy1</option>
          <option value="dummy2">Dummy2</option>
          <option value="dummy3">Dummy3</option>
        </select>

        {pageState === 3 ? (
          <>
            <div>To</div>
            <label htmlFor="swap-token-list">Token</label>
            <select name="swap-token-list" id="swap-token-list">
              <option value="dummy1">Dummy1</option>
              <option value="dummy2">Dummy2</option>
              <option value="dummy3">Dummy3</option>
            </select>
          </>
        ) : null}
        <label htmlFor="blockchain-network">Blockchain Network</label>
        <select
          name="blockchain-network"
          id="blockchain-network"
          onChange={handleNetwork}
          value={tokenNetworkValue}
        >
          <option value="polygon">Polygon</option>
          <option value="ethereum">Ethereum</option>
          <option value="polkadot">Polkadot</option>
        </select>
      </div>
      <div class="button-container">
        {pageState != 1 ? (
          <button onClick={() => getPrevPage(pageState)}>Back</button>
        ) : null}
        {pageState != 4 ? (
          <button onClick={() => getNextPage(pageState)}>Next</button>
        ) : null}
        {pageState === 4 ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : null}
      </div>
    </>
  );
}

export default BaseComponent;
