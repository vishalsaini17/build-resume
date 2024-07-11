import { styled } from "@mui/material/styles";
import { memo, ReactNode } from "react";

type StyledProps = {
  underline?: boolean;
  align?: "left" | "center" | "right";
};

type Props = {
  children: ReactNode;
} & StyledProps;

const StyledH2 = styled("h2")<StyledProps>(({ align = "left" }) => ({
  position: "relative",
  textAlign: align,
}));

const UnderlineSpan = styled("span")<{ underline: boolean; align: "left" | "center" | "right" }>(
  ({ underline, align, theme }) => ({
    position: "relative",
    display: "inline-block",
    "&::before": underline
      ? {
          content: '""',
          position: "absolute",
          bottom: 0,
          width: "50%",
          maxWidth: "64px",
          height: "2px",
          backgroundColor: theme.palette.primary.main,
          left: align === "left" ? 0 : align === "center" ? "50%" : "auto",
          right: align === "right" ? 0 : "auto",
          transform: align === "center" ? "translateX(-50%)" : "none",
        }
      : {},
  })
);

const TitleH2: React.FC<Props> = ({ children, underline = false, align = "left" }) => {
  return (
    <StyledH2 align={align}>
      <UnderlineSpan underline={underline} align={align}>
        {children}
      </UnderlineSpan>
    </StyledH2>
  );
};

export default memo(TitleH2);
