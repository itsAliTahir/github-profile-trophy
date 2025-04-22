export const COLORS: { [name: string]: Theme } = {
  aliTahirDarkTheme: {
    BACKGROUND: "transparent",
    TITLE: "#EC615B",         // Primary - Red
    ICON_CIRCLE: "#EC615B",   // Match the title
    TEXT: "#FFFFFF",          // White text
    LAUREL: "#461EB8",        // Secondary - Blue

    SECRET_RANK_1: "#FF0000",
    SECRET_RANK_2: "#FF00FF",
    SECRET_RANK_3: "#0000FF",
    SECRET_RANK_TEXT: "#FF00FF",
    DEFAULT_RANK_TEXT: "#FFFFFF",

    NEXT_RANK_BAR: "#461EB8",

    S_RANK_BASE: "#FAD200",
    S_RANK_SHADOW: "#C8A090",
    S_RANK_TEXT: "#886000",

    A_RANK_BASE: "#B0B0B0",
    A_RANK_SHADOW: "#9090C0",
    A_RANK_TEXT: "#505050",

    B_RANK_BASE: "#A18D66",
    B_RANK_SHADOW: "#816D96",
    B_RANK_TEXT: "#412D06",

    DEFAULT_RANK_BASE: "#777777",
    DEFAULT_RANK_SHADOW: "#333333",
    // Make the default text white for consistency
  },
  default: {
    BACKGROUND: "#FFFFFF",
    TITLE: "#000000",
    ICON_CIRCLE: "#FFFFFF",
    TEXT: "#666666",
    LAUREL: "#009366",
    SECRET_RANK_1: "#FF0000",
    SECRET_RANK_2: "#FF00FF",
    SECRET_RANK_3: "#0000FF",
    SECRET_RANK_TEXT: "#FF00FF",
    NEXT_RANK_BAR: "#0366D6",
    S_RANK_BASE: "#FAD200",
    S_RANK_SHADOW: "#C8A090",
    S_RANK_TEXT: "#886000",
    A_RANK_BASE: "#B0B0B0",
    A_RANK_SHADOW: "#9090C0",
    A_RANK_TEXT: "#505050",
    B_RANK_BASE: "#A18D66",
    B_RANK_SHADOW: "#816D96",
    B_RANK_TEXT: "#412D06",
    DEFAULT_RANK_BASE: "#777777",
    DEFAULT_RANK_SHADOW: "#333333",
    DEFAULT_RANK_TEXT: "#333333",
  },
  aliTahir_flat: {
    BACKGROUND: "transparent",
    TITLE: "#EC615B",
    ICON_CIRCLE: "#EC615B",
    TEXT: "#FFFFFF",
    LAUREL: "#461EB8",
    NEXT_RANK_BAR: "#461EB8",

    SECRET_RANK_1: "#FF0000",
    SECRET_RANK_2: "#FF00FF",
    SECRET_RANK_3: "#0000FF",
    SECRET_RANK_TEXT: "#FF00FF",

    S_RANK_BASE: "#EC615B",
    S_RANK_SHADOW: "#461EB8",
    S_RANK_TEXT: "#FFFFFF",

    A_RANK_BASE: "#461EB8",
    A_RANK_SHADOW: "#EC615B",
    A_RANK_TEXT: "#FFFFFF",

    B_RANK_BASE: "#EC615B",
    B_RANK_SHADOW: "#B83232",
    B_RANK_TEXT: "#FFFFFF",

    DEFAULT_RANK_BASE: "#5A5A5A",
    DEFAULT_RANK_SHADOW: "#282828",
    DEFAULT_RANK_TEXT: "#FFFFFF"
  },
  aliTahir_gradient: {
    BACKGROUND: "transparent",
    TITLE: "#EC615B",
    ICON_CIRCLE: "#461EB8",
    TEXT: "#FFFFFF",
    LAUREL: "#FF6496",
    NEXT_RANK_BAR: "#A040BE",

    SECRET_RANK_1: "#FF0000",
    SECRET_RANK_2: "#FF00FF",
    SECRET_RANK_3: "#0000FF",
    SECRET_RANK_TEXT: "#FF00FF",

    S_RANK_BASE: "#EC615B",
    S_RANK_SHADOW: "#461EB8",
    S_RANK_TEXT: "#FFFFFF",

    A_RANK_BASE: "#C846AA",
    A_RANK_SHADOW: "#461EB8",
    A_RANK_TEXT: "#FFFFFF",

    B_RANK_BASE: "#B85A8C",
    B_RANK_SHADOW: "#5A1E8C",
    B_RANK_TEXT: "#FFFFFF",

    DEFAULT_RANK_BASE: "#503C64",
    DEFAULT_RANK_SHADOW: "#1E1E32",
    DEFAULT_RANK_TEXT: "#FFFFFF"
  },
  aliTahir_neon: {
    BACKGROUND: "transparent",
    TITLE: "#FF1744",
    ICON_CIRCLE: "#651FFF",
    TEXT: "#FFFFFF",
    LAUREL: "#18FFFF",
    SECRET_RANK_1: "#FF0000",
    SECRET_RANK_2: "#FF00FF",
    SECRET_RANK_3: "#0000FF",
    SECRET_RANK_TEXT: "#FF00FF",
    NEXT_RANK_BAR: "#651FFF",

    S_RANK_BASE: "#FF1744",
    S_RANK_SHADOW: "#651FFF",
    S_RANK_TEXT: "#FFFFFF",

    A_RANK_BASE: "#E040FB",
    A_RANK_SHADOW: "#7C4DFF",
    A_RANK_TEXT: "#FFFFFF",

    B_RANK_BASE: "#00E5FF",
    B_RANK_SHADOW: "#00B8D4",
    B_RANK_TEXT: "#FFFFFF",

    DEFAULT_RANK_BASE: "#424242",
    DEFAULT_RANK_SHADOW: "#212121",
    DEFAULT_RANK_TEXT: "#FFFFFF"
  },

  // aliTahir_glass: {
  //   BACKGROUND: "transparent",
  //   TITLE: "#EC615BCC",
  //   ICON_CIRCLE: "#461EB8CC",
  //   TEXT: "#FFFFFFE6",
  //   LAUREL: "#461EB899",
  //   NEXT_RANK_BAR: "#EC615B99",

  //   S_RANK_BASE: "#EC615B99",
  //   S_RANK_SHADOW: "#461EB899",
  //   S_RANK_TEXT: "#FFFFFFE6",

  //   A_RANK_BASE: "#461EB899",
  //   A_RANK_SHADOW: "#EC615B80",
  //   A_RANK_TEXT: "#FFFFFFE6",

  //   B_RANK_BASE: "#B44678CC",
  //   B_RANK_SHADOW: "#50148CCC",
  //   B_RANK_TEXT: "#FFFFFFE6",

  //   DEFAULT_RANK_BASE: "#5A5A5A80",
  //   DEFAULT_RANK_SHADOW: "#1E1E1E80",
  //   DEFAULT_RANK_TEXT: "#FFFFFFCC"
  // },
  // Continue converting other themes similarly...
};

export interface Theme {
  BACKGROUND: string;
  TITLE: string;
  ICON_CIRCLE: string;
  TEXT: string;
  LAUREL: string;
  SECRET_RANK_1: string;
  SECRET_RANK_2: string;
  SECRET_RANK_3: string;
  SECRET_RANK_TEXT: string;
  NEXT_RANK_BAR: string;
  S_RANK_BASE: string;
  S_RANK_SHADOW: string;
  S_RANK_TEXT: string;
  A_RANK_BASE: string;
  A_RANK_SHADOW: string;
  A_RANK_TEXT: string;
  B_RANK_BASE: string;
  B_RANK_SHADOW: string;
  B_RANK_TEXT: string;
  DEFAULT_RANK_BASE: string;
  DEFAULT_RANK_SHADOW: string;
  DEFAULT_RANK_TEXT: string;
}
