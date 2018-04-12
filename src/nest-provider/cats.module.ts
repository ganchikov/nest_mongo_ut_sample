import {Module, Global} from '@nestjs/common';
// import {MongooseModule} from '@nestjs/mongoose';
import {CatsController} from './cats.controller';
import {CatsService} from './cats.service';
import {CatSchema} from './cat.schema';
import { DatabaseModule } from './database.module';
import { catsProviders } from './cats.providers';

@Module({
    imports: [
        // MongooseModule.forFeature([{name: 'dummy', schema: DummySchema}]),
        DatabaseModule,
    ],
    controllers: [CatsController],
    components: [CatsService,
    ... catsProviders],
})
export class CatsModule {}