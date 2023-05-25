import { User } from '../entities/User';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const createFirstUser = async () => {
    const user = await User.findOne({ where: { id: 1 } });
    if (!user) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const firstUser = new User();
        firstUser.login = "admin";
        firstUser.password = bcrypt.hashSync("password", salt);
        firstUser.accountActive = true;
        firstUser.save()
    }
}
