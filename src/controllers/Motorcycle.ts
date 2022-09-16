import { Request, Response } from 'express';
import { IService } from '../interfaces/Iservice';
import { IMotorcycle } from '../interfaces/IMotorcycle';

class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(
    // Unimos o tipo do _request_ com um objeto que tem chave `body` com o valor de um ICar
    // assim conseguimos extrair as propriedades da armação para passá-las para o _service_
    req: Request & { body: IMotorcycle },
    // Usamos o ICar como parâmetro genérico do Request
    // para declarar que vamos responder a requisição com um objeto do tipo ICar
    res: Response<IMotorcycle>,
  ) {
    const {
      model,
      year,
      color,
      status,
      buyValue,
      category,
      engineCapacity,
    } = req.body;
    const motorcycle = { model, year, color, status, buyValue, category, engineCapacity };
    const result = await this._service.create(motorcycle);
    return res.status(201).json(result);
  }

  public async read(_req: Request, res: Response<IMotorcycle[]>) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response<IMotorcycle>) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async update(
    req: Request & { body: IMotorcycle },
    res: Response<IMotorcycle | null>,
  ) {
    const {
      model,
      year,
      color,
      status,
      buyValue,
      category,
      engineCapacity,
    } = req.body;
    const motorcycle = { model, year, color, status, buyValue, category, engineCapacity };
    const result = await this._service.update(req.params.id, motorcycle);
    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response<IMotorcycle>) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
}

export default MotorcycleController;