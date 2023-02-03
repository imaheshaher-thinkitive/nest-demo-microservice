import { CreateUserEvent } from './evnets/crate-user-event';
import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_create')
  handleUserCreated(data: CreateUserEvent) {
    return this.appService.handleUserCreated(data)
  }
}
