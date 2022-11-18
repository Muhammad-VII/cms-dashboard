import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './jwt-constraint';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private _UserService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret
    })
  }
  
  async validate(payload: any) {
    const user = await this._UserService.findOne(payload.email)
    return user
  }
}