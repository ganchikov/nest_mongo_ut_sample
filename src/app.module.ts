import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import {DummyModule} from 'nest-mongoose/dummy.module';
import { CatsModule } from 'nest-provider/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dummy'),
    DummyModule,
    CatsModule,
  ],
  controllers: [AppController],
  components: [],
})
export class AppModule {}
