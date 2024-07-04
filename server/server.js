import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const connectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: connectionString,
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/", (_, res) => {
  res.json({ message: "This is the root route. How roude!" });
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
