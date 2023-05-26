import { DataSource, Repository } from "typeorm";
import ormConfig from "../ormconfig";
import { User } from "../entities/User";
import { SnakeNamingStrategy } from "./SnakeNamingStrategy";

const typedOrmConfig = {
  ...ormConfig,
  type: ormConfig.type as any,
  namingStrategy: new SnakeNamingStrategy(),
};

export const myDataSource = new DataSource(typedOrmConfig);

let UserRepository: Repository<User> | undefined = undefined;

export async function connectAndGetRepositories() {
  if (UserRepository === undefined) {
    await myDataSource.initialize();
    UserRepository = myDataSource.getRepository(User);
  }

  return {
    UserRepository: UserRepository,
  };
}
