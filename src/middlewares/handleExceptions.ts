import { NextFunction, Request, Response } from 'express';

import ApplicationErrors from '../errors/ApplicationErrors';

export function handleExceptions(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> {
  if (err instanceof ApplicationErrors) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.log(err);

  return res.status(500).json({
    status: 'Error',
    message: 'Server internal error',
  });
}
