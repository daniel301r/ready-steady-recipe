
import 'styled-components';

interface IColors {
    primary: string;
    secondary: string;
    yellow: string;
    lightORange: string;
    orange: string;
    white: string;
    black: string;
}


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
  }
}