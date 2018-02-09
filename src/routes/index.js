/* @flow */

import * as Express from 'express';
import {UserRoutes} from './user.routes';

const router: Express.Router = Express.Router();

router.use('/users', UserRoutes);

export const Routes = router;