import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnvironmentModel } from './environment.model';
import { TimingDto } from './data/timing.dto';

@Controller('globalEnv')
export class GlobalEnvironmentController {
  private globalEnv: EnvironmentModel = {
    light: {
      onTime: null,
      offTime: null,
    },
    fan: {
      onTime: null,
      offTime: null,
    },
  };

  @Get()
  env(): EnvironmentModel {
    return this.globalEnv;
  }

  @Post()
  lights(@Body() timing: TimingDto): EnvironmentModel {
    this.globalEnv.light.onTime = timing.onTime;
    this.globalEnv.light.offTime = timing.offTime;
    return this.globalEnv;
  }
}
