// export default {
//     "type": "sqlite",
//     "database": "database.sqlite",
//     "synchronize": true,
//     "logging": false,
//     "entities": [
//         "src/entities/*.ts"
//     ],
//     "migrations": [
//         "migrations/*.ts"
//     ],
//     "namingStrategy": "src/config/SnakeNamingStrategy.ts",
//     "cli": {
//         "entitiesDir": "src/entities",
//         "migrationsDir": "migrations"
//     }
// };

import { SnakeNamingStrategy } from "./config/SnakeNamingStrategy";

export default {
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [
        process.env.NODE_ENV === "development" ? "src/entities/*.ts" : "dist/entities/*.js"
    ],
    migrations: [
        process.env.NODE_ENV === "development" ? "src/migrations/*.ts" : "dist/migrations/*.js"
    ],
    namingStrategy: new SnakeNamingStrategy(),
    cli: {
        entitiesDir: process.env.NODE_ENV === "development" ? "src/entities" : "dist/entities",
        migrationsDir: process.env.NODE_ENV === "development" ? "src/migrations" : "dist/migrations",
    }
};