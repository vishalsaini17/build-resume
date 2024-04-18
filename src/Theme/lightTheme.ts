import { createTheme, LinkProps } from "@mui/material";
import LinkBehavior from "../App/component/LinkBehavior";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
  },
});

export default lightTheme