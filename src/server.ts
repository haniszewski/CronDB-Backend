import express, { Request, Response } from 'express';
import routers from './routes';
import * as bodyParser from 'body-parser';
import { createFirstUser } from './utils/createFirstUser';
import { connectAndGetRepositories } from './config/dataSource';

require('dotenv').config();


const app = express();
app.use(bodyParser.json());

app.use('/auth', routers.authRouter);
app.use('/users', routers.userRouter);
app.use('/databases',routers.databasesRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

if (process.env.NODE_ENV === "development") {
  console.log('Dev');
}



async function startServer() {
  await connectAndGetRepositories();
  await createFirstUser();
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}

startServer();
