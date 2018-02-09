/* @flow */

import {Router} from 'express';
import {UserController} from '../controllers/user.controller';

const userRouter: Router = Router();

/**
 * User endpoint middleware list
 */

// userRouter.get();

/**
 * User endpoint list
 */

userRouter.route('/')
    .get((req, res) => UserController.all(req, res))
    .post((req, res) => UserController.create(req, res));

userRouter.route('/:id')
    .get((req, res) => UserController.show(req, res))
    .post((req, res) => UserController.update(req, res))
    .delete((req, res) => UserController.destroy(req, res));

export const UserRoutes = userRouter;