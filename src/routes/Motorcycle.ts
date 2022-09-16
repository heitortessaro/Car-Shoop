import { Router, Request, Response } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleService from '../services/Motorcycle';
import MotorcycleModel from '../models/Motorcycle';

const route = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

const baseRoute = '/motorcycles';

route.post(baseRoute, (req: Request, res: Response) =>
  motorcycleController.create(req, res));
route.get(baseRoute, (req: Request, res: Response) =>
  motorcycleController.read(req, res));
route.get(`${baseRoute}/:id`, (req: Request, res: Response) =>
  motorcycleController.readOne(req, res));
route.put(`${baseRoute}/:id`, (req: Request, res: Response) =>
  motorcycleController.update(req, res));
route.delete(`${baseRoute}/:id`, (req: Request, res: Response) =>
  motorcycleController.delete(req, res));

export default route;