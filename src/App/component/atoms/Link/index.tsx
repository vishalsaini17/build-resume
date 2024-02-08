import { LinkProps, Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

const Link: React.FC<LinkProps> = ({ href, ...linkProps }) => {
  return <MuiLink {...linkProps} component={ReactRouterLink} to={href ?? "#"} />;
};
export default Link;
