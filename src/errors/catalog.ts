export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  INvalidMongoId = 'InvalidMongoId',
}

// obj used to construct the API response
type ErrorResponseObject = {
  message: string,
  httpStatus: number,
};

export type ErrorCatalog = {
  // each object key is a key for the enum ErrorTypes
  // and each value is an API response object
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Entity not Found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    httpStatus: 400,
  },
};