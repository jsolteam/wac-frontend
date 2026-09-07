export const theme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    background: "#000B19",
  },
  icons: {
    colors: {
      white: "#ffffff",
      purple: "#A53DC8",
    },
  },
  inputs: {
    colors: {
      required: "#027DB4",
      optionally: "#022E42",
      placeholder: "#D3D3D3",
      text: "#FFFFFF",
    },
  },
  text: {
    colors: {
      title: "#FFEC83",
      subtitle: "#DEDEDE",
      default: "#ffffff",
      caption: "rgba(151,151,151,0.24)",
      creator: "#BEBEBE",
      error: "#A70D0F",
      mainTitle: "#B1FCFF",
      bold: "#FFEC83",
    }
  },
  loading: {
    colors: {
      primary: "#005eb6",
      secondary: "#93ECF9",
      button: "",
    },
  },
};

export type TTheme = typeof theme;
