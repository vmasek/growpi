export interface EnvironmentModel {
  light: Timing;
  fan: Timing;
}

export interface Timing {
  onTime: number;
  offTime: number;
}
