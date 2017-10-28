import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(ApplicationModule);
  return await app.listen(3000);
}

bootstrap();
