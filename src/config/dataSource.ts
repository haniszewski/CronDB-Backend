import { DataSource, Repository } from "typeorm";
import ormConfig from "../../ormconfig.json";
import { User } from "../entities/User";
import { SnakeNamingStrategy } from "./SnakeNamingStrategy";

const typedOrmConfig = {
  ...ormConfig,
  type: ormConfig.type as any,
  namingStrategy: new SnakeNamingStrategy(),
};

export const dataSource = new DataSource(typedOrmConfig);

let UserRepository: Repository<User> | undefined = undefined;

export async function connectAndGetRepositories() {
  if (UserRepository === undefined) {
    await dataSource.initialize();
    UserRepository = dataSource.getRepository(User);
  }

  return {
    UserRepository: UserRepository,
  };
}
