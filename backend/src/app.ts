import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Pool } from "pg";

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
const PORT = 4000;

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Create a PostgreSQL pool to manage connections
const pool = new Pool({
  user: "postgres",
  host: "postgres-db", // Update this to the linked container name
  database: "postgres",
  password: "mysecretpassword",
  port: 5432,
});

// Test the database connection
pool.connect((err, client, done) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to PostgreSQL database!");
  }
  done();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello, World! (from the APIsd)");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const getUsers = (req: Request, res: Response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

app.get("/users", getUsers);

const getUserById = (request, response) => {
  const id = request.params.id;

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

app.get("/user/:id", getUserById);

const createUser = (request, response) => {
  const { id, firstname, lastname, email, phone, location, hobby } =
    request.body;

  pool.query(
    "INSERT INTO users (id, firstname, lastname, email, phone, location, hobby) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [id, firstname, lastname, email, phone, location, hobby],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json(results.rows[0].id);
    }
  );
};

app.post("/user", createUser);

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { firstname, lastname, email, phone, location, hobby } = request.body;

  pool.query(
    "UPDATE users SET firstname = $1, lastname = $2, email = $3, phone = $4, location = $5, hobby = $6 WHERE id = $7",
    [firstname, lastname, email, phone, location, hobby, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results);
    }
  );
};

app.put("/user/:id", updateUser);
