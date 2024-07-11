import { Box } from "@mui/material";
import { memo, useState } from "react";

type props = {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  placeholder?: string;
};

const Img: React.FC<props> = ({ src, alt = "VishWeb", width, height, style, placeholder }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(placeholder || "https://via.placeholder.com/150?text=" + alt);
  };

  return (
    <Box
      component="img"
      src={imgSrc}
      alt={alt}
      sx={{ width, height, display: "inline-block", maxWidth: "100%", ...style }}
      onError={handleError}
    />
  );
};
export default memo(Img);
