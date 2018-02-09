/* @flow */

import {Database} from '../';
import {Sequelize} from 'sequelize';

export const UserModel: Sequelize = Database.instance.define('users', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING
});