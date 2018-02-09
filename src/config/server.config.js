/* @flow */

import type {ServerOptionsInterface} from '../interfaces/server.interfaces';
import dotenv from 'dotenv';

dotenv.load();

export const ServerConfig: ServerOptionsInterface = {
    port: process.env.SERVER_PORT || '3000'
};