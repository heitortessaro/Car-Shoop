import { Request, Response } from 'express';
import { IService } from '../interfaces/Iservice';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    // Unimos o tipo do _request_ com um objeto que tem chave `body` com o valor de um ICar
    // assim conseguimos extrair as propriedades da armação para passá-las para o _service_
    req: Request & { body: ICar },
    // Usamos o ICar como parâmetro genérico do Request
    // para declarar que vamos responder a requisição com um objeto do tipo ICar
    res: Response<ICar>,
  ) {
    const {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    } = req.body;
    const car = { model, year, color, status, buyValue, doorsQty, seatsQty };
    const result = await this._service.create(car);
    return res.status(201).json(result);
  }

  public async read(_req: Request, res: Response<ICar[]>) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async update(
    req: Request & { body: ICar },
    res: Response<ICar | null>,
  ) {
    const {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    } = req.body;
    const car = { model, year, color, status, buyValue, doorsQty, seatsQty };
    const result = await this._service.update(req.params.id, car);
    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response<ICar>) {
    const result = await this._service.delete(req.params.id);
    return res.status(200).json(result);
  }
}

export default CarController;