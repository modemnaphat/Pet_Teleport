/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetController } from './controller/pet.controller';
import { PetService } from './services/pet.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import User from './entitices/user.entities';
import PurchaseOrder from './entitices/purcaseorder.entities';
import Pet from './entitices/pet.entities';
import PetBaseEntity from './entitices/Petbaseentity.entities';
import { PurchaseOrderController } from './controller/purchaseorder.controller';
import { UserController } from './controller/user.controller';
import { PetBaseEntityController } from './controller/petbaseentity.controller';
import { PurchaseorderService } from './services/purchase.service';
import { PetBaseEntityService } from './services/petbaseentity.service';
import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './userlogin/user.module';
import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from './auth/auth.guard';
import { RolesGuard } from './auth/roles.guard';
import { SearchService } from './services/search.service';
import { StatusController } from './controller/shipping.controller';
import { StatusService } from './services/status.service';
import  Admin  from './entitices/admin.entities';
import { AdminController } from './controller/admin.controller';
import { AdminService } from './services/admin.service';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as socket from 'socket.io-client';
import { ShippingService } from './services/shipping.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        let option: TypeOrmModuleOptions = {
          type: "sqlite",
          database: configService.get<string>("DATABASE_NAME", 'database.db'),
          entities: [User, Pet, PurchaseOrder, PetBaseEntity, Admin],
          synchronize: true,
        } 
        return option;
      },
      inject: [ConfigService]
    }),

    TypeOrmModule.forFeature([Pet, User, PurchaseOrder, PetBaseEntity, Admin]),
    JwtModule,
    AuthModule,
    UsersModule
  ],

  controllers: [AppController, PetController, PurchaseOrderController, UserController, PetBaseEntityController,StatusController,AdminController,StatusController],
  providers: [AppService, PetService, PurchaseorderService,PetBaseEntityService, UserService,AuthService,StatusService,SearchService,AdminService,ShippingService,
  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  }
  ],
})
export class AppModule {}

