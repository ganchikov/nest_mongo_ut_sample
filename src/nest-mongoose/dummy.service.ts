import {Model} from 'mongoose';
import {Component} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Dummy} from './dummy.interface';
import {DummySchema} from './dummy.schema';

@Component()
export class DummyService {

    constructor(@InjectModel(DummySchema) private readonly dummyModel: Model<Dummy>){

    }

    async findAll() {
        return await this.dummyModel.find().exec();
    }
}