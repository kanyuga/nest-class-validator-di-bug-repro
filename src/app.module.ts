import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyValidator } from './validator';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MyValidator],
})
export class AppModule {}
