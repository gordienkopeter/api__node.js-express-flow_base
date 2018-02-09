/* @flow */

import type {request as Request, response as Response} from 'express';
import {ControllerInterface} from '../interfaces/controller.interfaces';
import type {Sequelize} from 'sequelize';

export class Controller implements ControllerInterface {
    static model: Sequelize;

    static async all(req: Request, res: Response): Promise<Array<Sequelize>> {
        return res.send(await this.model.findAll());
    }

    static async show(req: Request, res: Response): Promise<Sequelize> {
        const {id} = req.params;
        return res.send(await this.model.findById(id));
    }

    static async create(req: Request, res: Response): Sequelize {
        return res.send(await this.model.create(req.body));
    }

    static async update(req: Request, res: Response): Sequelize {
        const {id} = req.parems;
        const user: Sequelize = await this.model.findById(id);

        await user.update(req.body);

        return res.send(user);
    }

    static async destroy(req: Request, res: Response): Promise<boolean> {
        const {id} = req.parems;
        const user: Sequelize = await this.model.findById(id);

        return res.send(await user.destroy());
    }
}