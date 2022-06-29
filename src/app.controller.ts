import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { IsNotEmpty, Validate } from 'class-validator';
import { MyValidator } from './validator';

class BodyDTO {
  @Validate(MyValidator)
  @IsNotEmpty()
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  validate(@Body(new ValidationPipe()) bodyDTO: BodyDTO): string {
    return bodyDTO.name;
  }
}
