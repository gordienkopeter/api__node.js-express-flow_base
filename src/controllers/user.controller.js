/* @flow */

import type {Sequelize} from 'sequelize';
import type {ControllerInterface} from '../interfaces/controller.interfaces';
import {Controller} from './controller';
import {UserModel} from '../database/models/user.model';

export class UserController extends Controller implements ControllerInterface {
    static model: Sequelize = UserModel;
}