import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./editor.module.scss";

type props = {
  value?: string;
  readOnly?: boolean;
  contentOnly?: boolean;
  onChange?: (content: string) => void;
};

const Editor: React.FC<props> = ({ value, readOnly = false, contentOnly = false, onChange }) => {
  return (
    <ReactQuill
      value={value || ""}
      onChange={(content) => {
        onChange && onChange(content);
      }}
      readOnly={readOnly || contentOnly}
      modules={{
        toolbar: !contentOnly,
      }}
      className={contentOnly ? styles.contentOnly : ""}
    />
  );
};
export default Editor;
