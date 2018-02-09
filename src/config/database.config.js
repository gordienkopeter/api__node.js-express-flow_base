/* @flow */

import type {ConnectOptionsInterface} from '../interfaces/database.interfaces';
import dotenv from 'dotenv';

dotenv.load();

export const DatabaseConfig: ConnectOptionsInterface = {
    username: process.env.DB_USER_NAME || '',
    password: process.env.DB_USER_PASSWORD || '',
    database: process.env.DB_HOST || '',
    host: process.env.DB_NAME || ''
};