import {Controller, Get} from '@nestjs/common';
import {DummyService} from './dummy.service';

@Controller('dummy')
export class DummyController {
    constructor(private readonly dummyService: DummyService) {}

    @Get()
    findAll() {
        return this.dummyService.findAll();
    }
}