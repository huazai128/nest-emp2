import { Module } from "@nestjs/common";
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt'
import jwt from 'jsonwebtoken'
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { AUTH } from "@app/config";

console.log(AUTH.jwtTokenSecret, 'AUTH.jwtTokenSecret')

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            privateKey: AUTH.jwtTokenSecret as JwtModuleOptions['privateKey'],
            signOptions: {
                expiresIn: AUTH.expiresIn as number,
            },
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService]

})
export class AuthModule { }