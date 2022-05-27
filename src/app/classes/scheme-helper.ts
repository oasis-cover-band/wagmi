import { ColorHelper, ScaleType, Gradient } from '@swimlane/ngx-charts';
export class SchemeHelper {
  colorScheme: ColorHelper = {
    scale: 1,
    scaleType: ScaleType.Ordinal,
    colorDomain: ['#8aec09', '#b104f5', '#04c5f5', '#f5bd04', '#ddec09', '#f53404'],
    domain: ['#8aec09', '#b104f5', '#04c5f5', '#f5bd04', '#ddec09', '#f53404'],
    customColors: ['#8aec09', '#b104f5', '#04c5f5', '#f5bd04', '#ddec09', '#f53404'],
    generateColorScheme: () => {},
    getColor: (value: number) => {return this.colorScheme.customColors[value]},
    getLinearGradientStops: (value: number) => {
        const gradient: Gradient = {
        offset: 0,
        originalOffset: 0,
        color: '#8aec09',
        opacity: 1
        }
        const gradientArray = [gradient];
        return gradientArray;
    }
    }
}