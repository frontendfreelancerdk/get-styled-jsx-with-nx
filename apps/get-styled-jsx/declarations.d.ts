/*declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}*/
declare module '*.jsx.scss' {
  import {ReactNode} from "react";
  const cssClasses: ReactNode ; // this is only tru due to styled jsx
  export default cssClasses;
}
/*
declare module '*.scss' {
  import {ReactNode} from "react";
  const content: Record<string, string> | ReactNode;
  export default content;
}*/

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
