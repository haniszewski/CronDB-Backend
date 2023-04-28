import express, { Request, Response } from 'express';
import ormConfig from '../ormconfig.json';
import { createConnection, DataSourceOptions } from 'typeorm';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

createConnection(ormConfig as DataSourceOptions)
  .then(() => {
    app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });
  })
  .catch((error: Error) => {
    console.log(error);
  });
