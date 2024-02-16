import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersService } from "src/userlogin/users.service";
import { UsersModule } from "src/userlogin/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "src/entitices/user.entities";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";
//import { jwtContants } from "./contanis";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    UsersModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports:[ConfigModule],
      useFactory : (configService : ConfigService) => {
        let option : JwtModuleOptions = {
          global: true,
          secret: configService.get<string>("SECRET",'default_secret'),
          signOptions: { expiresIn: '60s'}
        }
        return option
      },
      inject : [ConfigService]
    }),
    TypeOrmModule.forFeature([User])
  ],
  providers: [AuthService,UsersService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}