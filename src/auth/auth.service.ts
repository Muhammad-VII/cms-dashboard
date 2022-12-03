import { jwtConstants } from './jwt-constraint';
import { addUserDocument } from './../users/model/users.model';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {compare} from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private _UsersService: UsersService, private _JwtService: JwtService) {
  }

  async getTokens(dtoUser: addUserDocument) {
    
    const [at, rt] = await Promise.all([
      this._JwtService.signAsync({ // Access Token
        id: dtoUser.id,
        email: dtoUser.email,
        fullName: dtoUser.fullName,
        mobile: dtoUser.mobileNumber,
        isVerified: dtoUser.isVerified
      },
      {
        secret: jwtConstants.secret,
        expiresIn: '15d',
        algorithm: "HS256"
      }),

      this._JwtService.signAsync({ // Refresh token
        id: dtoUser.id,
        email: dtoUser.email,
        fullName: dtoUser.fullName,
        mobile: dtoUser.mobileNumber,
        isVerified: dtoUser.isVerified
      },
      {
        secret: jwtConstants.secret,
        expiresIn: "30d",
        algorithm: "HS256" 
      })
    ])

    return {
      access_token: at,
      refresh_token: rt
    }
  }

  async login(email:string ,password:string): Promise<any> {
    const user = await this._UsersService.findOne(email);
    try {
      if (!user) {
        throw new UnauthorizedException(
          {
            message:"Email dosen't exist",
            status:401
          }
        )
      } else {
        const comparePass = await compare(password,user.password)
        if(!comparePass) {
          throw new UnauthorizedException({
            message:'Password is incorrect',
            status:401
          })
        } else {
          const tokens = await this.getTokens(user)
          return tokens
        }
      }
    } catch (error) {
      return error
    }
  }
}