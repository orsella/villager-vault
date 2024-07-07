import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/", (_, res) => {
  res.json({ message: "This is the root route. How roude!" });
});

app.get("/villagers", async (req, res) => {
  const result = await db.query(
    `SELECT villagers.*, personality.type FROM villagers JOIN personality ON villagers.personality_id = personality.id`
  );
  res.json(result.rows);
});

app.post("/form", async (req, res) => {
  const { villagerName, villagerSpecies, villagerPersonality, villagerCoffee } =
    req.body;

  try {
    await db.query(
      `INSERT INTO villagers (name, species, personality_id, coffee) VALUES ($1, $2, $3, $4)`,
      [villagerName, villagerSpecies, villagerPersonality, villagerCoffee]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("insert into db did not work", error);
    res.status(500).json({ success: false });
  }
});

//endpoints - use server recap for help
//GET endpoint --> we need to SELECT data from database
//POST endpoint --> we receive the body from client and we INSERT the body into the database

//! STRETCH GOALS: UPDATE and DELETE endpoints

// app.put("/updateFormData/:id", async (req, res) => {
//   const dataId = req.params.id;
//   const result = await db.query(
//     `UPDATE tablename SET column_name = $1, second_column = $2 WHERE id = $3 RETURNING *`,
//     [data_one, data_two, dataId]
//   );
//   res.json(result.rows);
// });

// app.delete("/deleteFormData/:id", async (req, res) => {
//   const id = req.params.id;
//   const result = await db.query(
//     `DELETE FROM table_name WHERE id = $1 RETURNING *`,
//     [id]
//   );
//   res.json(result.rows);
// });
