import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    villagerName: "",
    villagerSpecies: "",
    villagerPersonality: 0,
    villagerCoffee: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("the form values are:", formValues);

    const response = await fetch("https://villager-vault.onrender.com/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const data = await response.json();
    console.log("Response from server:", data);

    setFormValues({
      villagerName: "",
      villagerSpecies: "",
      villagerPersonality: 0,
      villagerCoffee: "",
    });
  }

  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="villagerName">Villager Name</label>
        <input
          type="text"
          name="villagerName"
          value={formValues.villagerName}
          required
          onChange={handleInputChange}
        />
        <label htmlFor="villagerSpecies">Villager Species</label>
        <input
          type="text"
          name="villagerSpecies"
          value={formValues.villagerSpecies}
          required
          onChange={handleInputChange}
        />
        <label htmlFor="villagerPersonality">Villager Personality</label>
        <select
          name="villagerPersonality"
          value={formValues.villagerPersonality}
          required
          onChange={handleInputChange}
        >
          <option defaultValue="selected">Select</option>
          <option value={1}>Normal</option>
          <option value={2}>Lazy</option>
          <option value={3}>Snooty</option>
          <option value={4}>Smug</option>
          <option value={5}>Peppy</option>
          <option value={6}>Jock</option>
          <option value={7}>Sisterly</option>
          <option value={8}>Cranky</option>
        </select>
        <label htmlFor="villagerCoffee">Favourite Coffee</label>
        <input
          type="text"
          name="villagerCoffee"
          value={formValues.villagerCoffee}
          required
          onChange={handleInputChange}
        />
        <div className="button-div">
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
        {/* <p>current value of name: {formValues.villagerName}</p>
        <p>current value of name: {formValues.villagerSpecies}</p>
        <p>current value of name: {formValues.villagerPersonality}</p>
        <p>current value of name: {formValues.villagerCoffee}</p> */}
      </form>
    </>
  );
}
