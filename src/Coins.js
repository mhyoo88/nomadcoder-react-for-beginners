import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); //useState() 빈값으로 두면 api 블러 오기전에 아래에 coin.length 나 coin.name이 undefined 이기 때문에 에러가 난다 useState([]) 기본값을 정해주면 적어도 undefind는 아니기 때문에 에러가 안난다.(기본값을 항상 정해둬야 udnefined가 나지 않는다.)

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const [buyCoins, setBuyCoins] = useState(0);
  const onChange = (event) => {
    setBuyCoins(event.target.value);
  };

  const [exchangeCoins, setExchangeCoins] = useState(0);
  const [coinSybol, setCoinSybol] = useState("");

  //when choose coin slelect caculate excahnge coin and show sybol
  const selectChange = (event) => {
    const result = buyCoins / event.target.value;
    setExchangeCoins(result);

    const targetCoinSybol =
      event.target[event.target.selectedIndex].attributes.name.value;
    setCoinSybol(targetCoinSybol);
  };

  return (
    <div>
      <h1>The Coins{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={selectChange}>
          {coins.map((coin) => (
            <option
              key={coin.id}
              value={coin.quotes.USD.price}
              name={coin.symbol}
            >
              {coin.name}({coin.symbol}) : $ {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <br />
      $
      <input onChange={onChange} value={buyCoins} />
      환전 된 돈:
      <input value={exchangeCoins} readOnly />
      <span style={{ color: "red" }}>{coinSybol}</span>
      <button>구매하기</button>
    </div>
  );
}

export default App;
