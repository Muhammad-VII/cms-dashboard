import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ValidateRequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    next();
  }
}
