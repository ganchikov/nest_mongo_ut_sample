import { Connection } from 'mongoose';
import { CatSchema } from './cat.schema';

export const catsProviders = [
  {
    provide: 'CatModelToken',
    useFactory: (mongoose) => mongoose.connection.model('Cat', CatSchema),
    inject: ['DbToken'],
  },
];