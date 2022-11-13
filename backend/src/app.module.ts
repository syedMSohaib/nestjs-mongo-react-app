import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Controllers } from './controllers';
import { Services } from './services';
import { Models } from './models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cluster0.1vjzmio.mongodb.net', {
      user: 'livello',
      pass: 'fOVeQxCu030g30rP',
      dbName: 'livellodb',
      w: 'majority',
      retryWrites: true,
    }),
    MongooseModule.forFeature(Models),
  ],
  controllers: [AppController, ...Controllers],
  providers: [AppService, ...Services],
})
export class AppModule {}
