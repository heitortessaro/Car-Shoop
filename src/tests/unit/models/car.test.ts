import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/Cars'
import { Model } from 'mongoose'
import {
  carMock,
  carMockWithId,
  carMockForChange,
  carMockForChangeWithId
} from '../../mocks/carMocks'
import { ErrorTypes } from '../../../errors/catalog'
import { ICar } from '../../../interfaces/ICar';
import { ZodError } from 'zod';

describe('Car Model', () => {
  const carModel = new CarModel();
  const carList = [carMockWithId];
  const validMongoId = '4edd40c86762e0fb12000003';

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(carList);
    sinon.stub(Model, 'findById')
      .onCall(0).resolves(carMockWithId)
      // for the case of not found Id
      .onCall(1).resolves(null);
    sinon.stub(Model, 'findByIdAndDelete')
      .onCall(0).resolves(carMockWithId)
      // for the case of not found Id
      .onCall(1).resolves(null);
    sinon.stub(Model, 'findByIdAndUpdate')
      .onCall(0).resolves(carMockForChangeWithId)
      // for the case of not found Id
      .onCall(1).resolves(null);
  });

  after(() => {
    sinon.restore();
  })

  describe('creating a car register', () => {
    it('sucessfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  })

  describe('searching car registers', () => {
    it('sucessfully found', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.an('array');
      // a interogação evita erro no caso de frameFound seja nulo
      cars?.forEach((car:ICar, index:number) =>{
        expect(car).to.be.deep.equal(carList[index]);
      })
    });
  })

  describe('searching a car register', () => {
    it('sucessfully found', async () => {
      const car = await carModel.readOne(validMongoId);
      expect(car).to.be.deep.equal(carMockWithId);
    });
    it('error: invalid _id', async () => {
      try {
        await carModel.readOne('WrongId');
      } catch (error: any) {
        expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
        // expect(error).to.be.instanceOf(ZodError);
      }
    });
    it('error: _id not found', async () => {
      const car = await carModel.readOne(validMongoId);
      expect(car).to.be.equal(null);
    })
  })

  describe('deleting a car register', () => {
    it('sucessfully deleted', async () => {
      const car = await carModel.delete(validMongoId);
      expect(car).to.be.deep.equal(carMockWithId);
    });
    it('error: invalid _id', async () => {
      try {
        await carModel.delete('WrongId');
      } catch (error: any) {
        expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
        // expect(error).to.be.instanceOf(ZodError);
      }
    });
    it('error: _id not found', async () => {
      const car = await carModel.delete(validMongoId);
      expect(car).to.be.equal(null);
    })
  });

  describe('updating a car register', () => {
    it('sucessfully updated', async () => {
      const car = await carModel.update(validMongoId, carMockForChange);
      expect(car).to.be.deep.eq(carMockForChangeWithId);
    });
    it('error: invalid _id', async () => {
      try {
        await carModel.update('WrongId', carMockForChange);
      } catch (error: any) {
        expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
        // expect(error).to.be.instanceOf(ZodError);
      }
    });
    it('error: _id not found', async () => {
      const car = await carModel.update(validMongoId, carMockForChange);
      expect(car).to.be.equal(null);
    })
  })

});

    // it('error for empty body' async () => {

    // });
    // it('error for invalid seats quantity' async () => {
      
    // });
    // it('error for invalid doors quantity' async () => {
      
    // })