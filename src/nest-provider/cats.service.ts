import {Model} from 'mongoose';
import {Component, Inject} from '@nestjs/common';
import {Cat} from './cats.interface';
import {CatSchema} from './cat.schema';

@Component()
export class CatsService {

    constructor(@Inject('CatModelToken') private readonly catModel: Model<Cat>){

    }

    async findAll() {
        return await this.catModel.find().exec();
    }
}