import { ICar } from "../../interfaces/ICar";

const carMock: ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
}

const carMockWithId: ICar & { _id: string } = {
  _id: '6323930286e451c2a5727b9d',
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
}

const carMockForChange: ICar = {
  model: "Fusca",
  year: 1963,
  color: "azul",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
}

const carMockForChangeWithId: ICar & { _id: string } = {
  _id: '6323930286e451c2a5727b9d',
  model: "Fusca",
  year: 1963,
  color: "azul",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
}

export {
  carMock,
  carMockWithId,
  carMockForChange,
  carMockForChangeWithId
}