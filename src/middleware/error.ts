import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }

  // aqui vamos fazer o cast da mensagem de erro para uma chave do Enum ErrorTypes
  // https://blog.logrocket.com/how-to-use-keyof-operator-typescript/
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;

  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message });
  }
  console.error(err);
  return res.status(500).json({ message: 'internal error.' });
};

export default errorHandler;