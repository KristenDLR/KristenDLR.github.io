import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'elevation' },
              style: {
                boxShadow: `10px 10px #efc918, -1em 0 0.5em #ff8400`,
                borderRadius: `0.25em`,
                border: `0.25rem solid black`,
              },
            },
          ],
        },
      },
    },
     MuiChip: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'filled' },
              style: {
                backgroundColor: '#ff8400'
              },
            },
             {
              props: { variant: 'outlined' },
              style: {
                backgroundColor: '#efc918',
                border: 'none',
              },
            },
          ],
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#ff8400",
    },
    success: {
      main: "#95c289",
    },
    secondary: {
      main: "#efc918",
    },
  },
});
