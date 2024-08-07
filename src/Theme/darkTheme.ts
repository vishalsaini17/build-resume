import { createTheme, LinkProps } from "@mui/material";
import LinkBehavior from "../App/component/LinkBehavior";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 8,
      },
    },
  },
});

export default darkTheme