import { Request, Response } from 'express';
import { User } from '../entities/User';

export class UserController {
    // Create a new user
    static async createUser(req: Request, res: Response): Promise<Response> {
        const { login, password, email, phoneNumber, accountActive } = req.body;

        const user = new User();
        user.login = login;
        user.password = password;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.accountActive = accountActive;

        try {
            await user.save();
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Error creating user', error });
        }
    }

    // Get all users
    static async getUsers(req: Request, res: Response): Promise<Response> {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching users', error });
        }
    }

    // Get user by ID
    static async getUserById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const user = await User.findOne({ where: { id: parseInt(id) } });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching user', error });
        }
    }
    // Update user
    static async updateUser(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { login, password, email, phoneNumber, accountActive } = req.body;

        try {
            const user = await User.findOne({ where: { id: parseInt(id) } });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            user.login = login;
            user.password = password;
            user.email = email;
            user.phoneNumber = phoneNumber;
            user.accountActive = accountActive;

            await user.save();

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Error updating user', error });
        }
    }

    // Delete user
    static async deleteUser(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const user = await User.findOne({ where: { id: parseInt(id) } });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            await user.remove();

            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting user', error });
        }
    }
}
