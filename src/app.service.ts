import { CreateUserEvent } from './evnets/crate-user-event';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUsercreated -communication', data);
  }
}
