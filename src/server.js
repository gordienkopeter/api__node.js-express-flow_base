/* @flow */

import type {ServerInterface, ServerOptionsInterface} from './interfaces/server.interfaces';
import type {DatabaseInterface} from './interfaces/database.interfaces';
import {ServerConfig} from './config/server.config';
import {Database} from './database';
import {Routes} from './routes';
import express from 'express';
import type {application as Express} from 'express';

export class Server implements ServerInterface {
    +options: ServerOptionsInterface;
    +db: DatabaseInterface = Database;
    +instance: Express = express();

    constructor(options: ServerOptionsInterface) {
        this.options = options;

        this.useRoutes();
        this.run();
    }

    useRoutes(): void {
        this.instance.use('/api', Routes);
    }

    run(): void {
        this.instance.listen(this.options.port, () => console.log(`Server listening on port ${this.options.port}!`));
    }
}

if (!module.parent) {
    new Server(ServerConfig);
}