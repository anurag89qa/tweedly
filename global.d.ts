// Allow importing of markdown files
declare module '*.md' {
  const text: string;
  export default text;
}

// Allow importing of JSON files
declare module '*.json' {
  const text: string;
  export default text;
}

// Allow importing of CSS files
declare module '*.css' {
  const styles: any;
  export default styles;
}

// Allow importing of CSS files
declare module '*.scss' {
  const styles: any;
  export default styles;
}

// This is a global definition that assumes the presence of `svg-sprite-loader`
// tslint:disable-next-line
interface SpriteSymbol {
  id: string;
  viewBox: string;
  content: string;
}

// Allow global import of SVGs via `svg-sprite-loader`
declare module '*.svg' {
  // tslint:disable-next-line
  const symbol: SpriteSymbol;
  export default symbol;
}

declare module 'react-with-styles*';

// Allow commonJs modules.export
declare module 'otkit-colors/token.common';