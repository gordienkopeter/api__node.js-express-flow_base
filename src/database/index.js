/* @flow */

import type {
    ConnectOptionsInterface,
    DatabaseInterface,
    ConnectOptionsDefaultInterface
} from '../interfaces/database.interfaces';
import {Sequelize} from 'sequelize';
import {DatabaseConfig} from '../config/database.config';

class DatabaseClass implements DatabaseInterface {
    instance: Sequelize;
    +defaultOptions: ConnectOptionsDefaultInterface = {
        dialect: 'mysql',
        logging: true
    };

    constructor(options: ConnectOptionsInterface | string): void {
        this.connect(options);
    }

    connect(options: ConnectOptionsInterface | string): void {
        if (typeof options === 'string') {
            this.instance = new Sequelize(options, this.defaultOptions);

            return;
        }

        this.instance = new Sequelize(Object.assign({}, this.defaultOptions, options));
    }
}

export const Database = new DatabaseClass(DatabaseConfig);