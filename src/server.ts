import express, { Request, Response } from 'express';
import ormConfig from '../ormconfig.json';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from './config/SnakeNamingStrategy';
import routers from './routes';
import * as bodyParser from 'body-parser';
import { CreateFirstUser } from './utils/createFirstUser';

const app = express();
app.use(bodyParser.json());

app.use('/auth',routers.authRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const typedOrmConfig = {
  ...ormConfig,
  type: ormConfig.type as any, // Cast the type to any to bypass the type check
  namingStrategy: new SnakeNamingStrategy(),
};

const dataSource = new DataSource(typedOrmConfig);



dataSource
  .connect()
  .then(() => {
    CreateFirstUser.createFirstUser();
    app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });
  })
  .catch((error: Error) => {
    console.log(error);
  });
