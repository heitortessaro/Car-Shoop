import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

// O Mongoose solicita que, ao criarmos um model 
// com a função model(que renomeamos para mongooseCreateModel)
// passemos a ela um esquema (Schema) que deverá ser respeitado. 

// Isso é necessário para que quando o nosso objeto for 
// instanciado, podermos ter acesso a todos os métodos e 
// atributos disponíveis para usarmos.

const carMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carMongooseSchema)) {
    super(model);
  }
}

export default Car;