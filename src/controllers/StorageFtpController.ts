import { Request, Response } from "express";
import { connectAndGetRepositories } from "../config/dataSource";
import { StorageFtp } from "../entities/StorageFtp";

export class StorageFtpController {
    static async testConnection(req: Request, res: Response): Promise<Response> {
        try {
            const { ftpHost, ftpPort, ftpLogin, ftpPass, passive} = req.body?.ftpAuth;
            // Send info to python backend to connect to database
            const ftpResp = true;
            if (!ftpResp) {
                return res.status(200).json({ message: "Connected!" })
            } else {
                return res.status(400).json({ message: "Connection failed!" })
            }
        } catch (error) {
            console.log(`Error: ${error}`)
        }
        return res.status(500).json({ message: 'Internal server error' });
    }

    static async addStorage(req: Request, res: Response): Promise<Response> {
        try {
            const { ftpHost, ftpPort, ftpLogin, ftpPass, passive} = req.body?.ftpAuth;

            const { StorageFtpRepository } = await connectAndGetRepositories();

            const ftpStorage = new StorageFtp();
            ftpStorage.ipAddr = ftpHost;
            ftpStorage.port = ftpPort;
            ftpStorage.ftpUser = ftpLogin;
            ftpStorage.ftpPass = ftpPass;
            ftpStorage.passive = passive;

            await StorageFtpRepository.save(ftpStorage);

            return res.status(200).json({ message: 'Added new Storage' })

        } catch (error) {
            console.log(error)

            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getAllStorages(req: Request, res: Response): Promise<Response> {
        try {
            const { StorageFtpRepository } = await connectAndGetRepositories();
            const storagesFtp = await StorageFtpRepository.find();
            return res.status(200).json(storagesFtp);
        } catch (error) {

            return res.status(500).json({ message: 'Internal server error' });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
}