import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IRequestWithUser } from '../types';

const jwtSecret = 'changeme_import_env';

export const authMiddleware = (req: IRequestWithUser, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = (decoded as any).id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
