import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private _AuthService: AuthService) {
    super({
      usernameField:"email",
      passwordField: 'password'
    });
  }

  async validate(email:string, password:string): Promise<string> {
    const user = await this._AuthService.login(email,password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
