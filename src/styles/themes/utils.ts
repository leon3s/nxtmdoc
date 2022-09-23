import type { DefaultTheme } from './default';

declare module "@emotion/react" {
  export interface Theme extends DefaultTheme {
    background: {
    }
  }
}
