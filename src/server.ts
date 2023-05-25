import express, { Request, Response } from 'express';
import routers from './routes';
import * as bodyParser from 'body-parser';
import { createFirstUser } from './utils/createFirstUser';
import { connectAndGetRepositories } from './config/dataSource';

const app = express();
app.use(bodyParser.json());

app.use('/auth', routers.authRouter);
app.use('/users', routers.userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


async function startServer() {
  const { UserRepository } = await connectAndGetRepositories();
  await createFirstUser();
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}

startServer();
