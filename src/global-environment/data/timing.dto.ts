import { Timing } from '../environment.model';

export class TimingDto implements Timing {
  readonly onTime: number;
  readonly offTime: number;
}
