import { Request, Response } from "express";
import axios from "axios";
import { DatabasePostgres } from "../entities/DatabasePostgres";
import { connectAndGetRepositories } from "../config/dataSource";



export class DatabasePostgresController {
    static async testConnection(req: Request, res: Response): Promise<Response> {
        const { dbHost, dbPort, dbLogin, dbPass, dbName } = req.body?.dbAuth

        try {
            // Send info to python backend to connect to database
            const dbResponse = true;

            if (dbResponse) {
                return res.status(200).json({ message: "OK" })
            } else {
                return res.status(400).json({ message: "Failed" })
            }
        } catch (error) {
            console.log(`Error: ${error}`)
        }
        return res.status(500).json({ message: 'Internal server error' });
    }

    static async addDatabase(req: Request, res: Response): Promise<Response> {
        try {
            const { dbHost, dbPort, dbLogin, dbPass, dbName } = req.body?.dbAuth
            const dbPostgres = new DatabasePostgres()
            dbPostgres.host = dbHost
            dbPostgres.port = dbPort
            dbPostgres.user = dbLogin
            dbPostgres.password = dbPass
            dbPostgres.dbName = dbName
            const { DatabasePostgresRepository } = await connectAndGetRepositories();
            await DatabasePostgresRepository.save(dbPostgres);

            return res.status(200).json({ message: 'Added new DatabasePostgres' })

        } catch (error) {

            return res.status(500).json({ message: 'Internal server error' });
        }

    }
}