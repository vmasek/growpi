import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as bodyParser from 'body-parser';

async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  return await app.listen(3000);
}

bootstrap();
