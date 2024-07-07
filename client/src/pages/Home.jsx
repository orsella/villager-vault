import { Link } from "react-router-dom";
import tent from "/assets/nook-tent.png";
import museum from "/assets/museum.png";

export default function Home() {
  return (
    <>
      <h1>Villager Vault</h1>
      <Link className="home-link" to="/villagers">
        <img className="tent" src={tent} alt="tent" />
      </Link>
      <p className="intro">Come check out who could visit your island next!</p>
      <Link className="home-link" to="/form">
        <img className="museum" src={museum} alt="museum" />
      </Link>
      <p className="intro">
        Found a new favourite? Add them to the collection!
      </p>
    </>
  );
}
