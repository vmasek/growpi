import { Module } from '@nestjs/common';
import { GlobalEnvironmentController } from '../global-environment';

@Module({
  modules: [
    GlobalEnvironmentController,
  ],
})
export class ApplicationModule {
}
