import { useState, useEffect } from "react";
import leaf from "/assets/leaf.png";

// this could be changed to villagers component
export default function Villagers() {
  const [villagers, setVillagers] = useState([]);

  // function will run after component renders
  // will need to update the depency array so that it runs again when new villager added
  // this might actually be fine as setVillagers(data) should rerender

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://villager-vault.onrender.com/villagers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setVillagers(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Villagers</h1>
      <div className="whole-villagers-div">
        {villagers.map((item) => {
          return (
            <div className="villagers-div" key={item.id}>
              <img className="leaf" src={leaf} alt="leaf" />
              <ul>
                <li>Villager: {item.name}</li>
                <li>Species: {item.species}</li>
                <li>Personality: {item.type}</li>
                <li>Favourite Coffee: {item.coffee}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
