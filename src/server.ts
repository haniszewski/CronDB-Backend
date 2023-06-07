import express, { Request, Response } from 'express';
import routers from './routes';
import * as bodyParser from 'body-parser';
import { createFirstUser } from './utils/createFirstUser';
import { connectAndGetRepositories } from './config/dataSource';
import cors from 'cors';

require('dotenv').config();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}


const app = express();
app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use('/auth', routers.authRouter);
app.use('/users', routers.userRouter);
app.use('/databases', routers.databasesRouter);
app.use('/storages',routers.storagesRouter);

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
