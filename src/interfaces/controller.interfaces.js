import type {request as Request, response as Response} from 'express';
import type {Sequelize} from 'sequelize';

export interface ControllerInterface {
    static model: Sequelize;
    static all(req: Request, res: Response): Promise<Array<Sequelize>>;
    static show(req: Request, res: Response): Promise<Sequelize>;
    static create(req: Request, res: Response): Promise<Sequelize>;
    static update(req: Request, res: Response): Promise<Sequelize>;
    static destroy(req: Request, res: Response): Promise<boolean>;
}