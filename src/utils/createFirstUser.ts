import { User } from '../entities/User';
import bcrypt from 'bcrypt';
import { myDataSource } from '../config/dataSource';

const saltRounds = 10;



export const createFirstUser = async () => {
    // const { UserRepository } = await connectAndGetRepositories();
    const UserRepository = myDataSource.getRepository(User)
    const user = await UserRepository.findOne({ where: { id: 1 } });
    // const user = false;
    if (!user) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const firstUser = new User();
        firstUser.login = "admin";
        firstUser.password = bcrypt.hashSync("password", salt);
        firstUser.accountActive = true;
        await UserRepository.save(firstUser)
    }
}
