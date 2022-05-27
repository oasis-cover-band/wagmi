import { Color, ScaleType } from '@swimlane/ngx-charts';
export class Scheme {
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#8aec09', '#b104f5', '#04c5f5', '#f5bd04', '#ddec09', '#f53404'],
  };
}