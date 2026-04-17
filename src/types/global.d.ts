declare module "react/jsx-runtime";
declare module "motion/react" {
  import * as React from "react";
  export const motion: any;
  export default motion;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};
