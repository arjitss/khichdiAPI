import dotenv from 'dotenv';
import express from 'express';

import { KhichdiController } from './Controllers/KhichdiController';

const port = 3000;
const app = express();
dotenv.config();

// TODO:
// 1. Exception Handling
// 2. Error Response Handling
// 3. Remove unnecessary index.test.ts file

// Fire Controllers
KhichdiController(app);

const server = app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default server;

// process.on('SIGINT', function () {
//   console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
//   // some other closing procedures go here
//   server.close();
//   process.exit(1);
// });
