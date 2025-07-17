declare module "*.png" {
  const value: any;

  export = value;
}

declare module "*.pdf" {
  const value: string;
  export default value;
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    gray: true
  }
}