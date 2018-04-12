import {Module, Global} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {DummyController} from './dummy.controller';
import {DummyService} from './dummy.service';
import {DummySchema} from './dummy.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'dummy', schema: DummySchema}]),
    ],
    controllers: [DummyController],
    components: [DummyService],
})
export class DummyModule {}