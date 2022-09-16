import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

// O Mongoose solicita que, ao criarmos um model 
// com a função model(que renomeamos para mongooseCreateModel)
// passemos a ela um esquema (Schema) que deverá ser respeitado. 

// Isso é necessário para que quando o nosso objeto for 
// instanciado, podermos ter acesso a todos os métodos e 
// atributos disponíveis para usarmos.

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

class Motorcycle extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycle', motorcycleMongooseSchema)) {
    super(model);
  }
}

export default Motorcycle;