import { useState, useEffect } from "react";
import leaf from "/assets/leaf.png";

export default function Villagers() {
  const [villagers, setVillagers] = useState([]);

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

  async function handleDelete(id) {
    const response = await fetch(
      `https://villager-vault.onrender.com/deleteFormData/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    console.log("deleted villager:", data);

    // Update the villagers state by filtering out the deleted villager
    setVillagers(villagers.filter((villager) => villager.id !== id));
  }

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
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
