import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/Cars';
import CarService from '../../../services/Car';
import {
  carMock,
  carMockWithId,
  carMockForChange,
  carMockForChangeWithId
} from '../../mocks/carMocks'

describe('Car Service', () => {
  const carModel = new CarModel;
  const carService = new CarService(carModel);
  const carList = [carMockForChangeWithId];
  const validMongoId = '4edd40c86762e0fb12000003';

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read')
      .onCall(0).resolves(carList)
      .onCall(1).resolves(null);
    sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(carModel, 'delete')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(carModel, 'update')
      .onCall(0).resolves(carMockForChangeWithId)
      .onCall(1).resolves(null);
  })
  after(() => {
    sinon.restore()
  })
  describe('creating a car register', () => {
    it('sucessfully created', async () => {
      const newCar = await carService.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
    it('error: invalid body data', async () => {
      let err
      try {
        await carService.create({});
      } catch (error) {
        err = error;
      }
      expect(err).to.be.instanceOf(ZodError);
    });
  })
  describe('reading car registers', () => {
    it('sucessfully read car registers', async () => {
      const cars = await carService.read();
      expect(cars).to.be.deep.equal(carList);
    });
    it('error: results not found', async () => {
      try {
        await carService.read();
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);
      }
    });
  })
  describe('reading a car register', () => {
    it('sucessfully read a register', async () => {
      const car = await carService.readOne(validMongoId);
      expect(car).to.be.deep.equal(carMockWithId);
    });
    it('error: id not found', async () => {
      try {
        await carService.readOne('WrongId');
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);
      }
    })
  });
  describe('deleting a car register', () => {
    it('sucessfully delete a register', async () => {
      const car = await carService.delete(validMongoId);
      expect(car).to.be.deep.equal(carMockWithId);
    });
    it('error: id not found', async () => {
      try {
        await carService.delete('WrongId');
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);
      }
    })
  });
  describe('updating a car register', () => {
    it('sucessfully update a register', async () => {
      const car = await carService.update(validMongoId, carMockForChange);
      expect(car).to.be.deep.equal(carMockForChangeWithId);
    });
    it('error: id not found', async () => {
      try {
        await carService.update(validMongoId, carMockForChange);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);
      }
    })
    it('error: invalid body data', async () => {
      let err
      try {
        await carService.update(validMongoId, {} as any);
      } catch (error) {
        err = error;
      }
      expect(err).to.be.instanceOf(ZodError);
    })
  })
})