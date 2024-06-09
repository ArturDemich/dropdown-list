import "./App.css";
import ButtonSearch from "./components/ButtonSearch";

function App() {
  return (
    <div className="container">
      <header>
        <div>DOGE $0.163</div>
        <div className="divider"></div>
        <div className="coins">
          <div>BTC</div>
          <div>ETH</div>
          <div>SOL</div>
        </div>
        <div className="divider"></div>

        <ButtonSearch />
      </header>
      <section className="content">Youre content...</section>
      <footer>created by Artur Demich</footer>
    </div>
  );
}

export default App;
