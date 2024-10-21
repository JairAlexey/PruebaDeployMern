import app from "./src/app.js";
import { PORT } from "./src/config.js";
import { connectDB } from "./src/db.js";

import dotenv from 'dotenv';
dotenv.config();

async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();
