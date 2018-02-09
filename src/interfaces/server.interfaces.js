/* @flow */

import type {application as Express} from 'express';
import type {DatabaseInterface} from './database.interfaces';

export interface ServerOptionsInterface {
    +port: string;
}

export interface ServerInterface {
    +options: ServerOptionsInterface;
    +db: DatabaseInterface;
    +instance: Express;

    constructor(options: ServerOptionsInterface): void;
    useRoutes(): void;
    run(): void;
}