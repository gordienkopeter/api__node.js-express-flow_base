/* @flow */

import {Sequelize} from 'sequelize';

export interface ConnectOptionsDialectOptionsInterface {
    socketPath: string;
    supportBigNumbers: boolean;
    bigNumberStrings: boolean;
}

export interface ConnectOptionsDefineDialectOptionsInterface {
    collate: string;
}

export interface ConnectOptionsSync {
    force: boolean;
}

export interface ConnectOptionsPool {
    max: number;
    idle: number;
    acquire: number;
}

export interface ConnectOptionsDefineInterface {
    underscored: boolean;
    freezeTableName: boolean;
    charset: string;
    dialectOptions: ConnectOptionsDefineDialectOptionsInterface;
    timestamps: boolean;
}

export interface ConnectOptionsDefaultInterface {
    dialect?: string;
    dialectOptions?: ConnectOptionsDialectOptionsInterface;
    protocol?: string | null;
    logging?: boolean;
    storage?: string;
    omitNull?: boolean;
    native?: boolean;
    define?: ConnectOptionsDefineInterface;
    sync?: ConnectOptionsSync;
    pool?: ConnectOptionsPool;
    isolationLevel?: Sequelize.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED |
        Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED |
        Sequelize.Transaction.ISOLATION_LEVELS.REPEATABLE_READ |
        Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE;
}

export interface ConnectOptionsInterface extends ConnectOptionsDefaultInterface {
    +username: string;
    +password: string;
    +database: string;
    +host: string;
}

export interface DatabaseInterface {
    instance: Sequelize;
    +defaultOptions: ConnectOptionsDefaultInterface;

    constructor(options: ConnectOptionsInterface | string): void;
    connect(options: ConnectOptionsInterface | string): void;
}