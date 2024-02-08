import { ArrowBackIos } from "@mui/icons-material";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import { Button, Fab } from "@mui/material";
import { Outlet } from "react-router-dom";
import Link from "../../component/atoms/Link";
import PrintBlock from "../../component/atoms/PrintBlock";
import styles from "./resumeLayout.module.scss";

type props = {};

const ResumeLayout: React.FC<props> = () => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.navbar}>
        <Link href="/">
          <Button variant="text" title="Back" startIcon={<ArrowBackIos />}>
            Back
          </Button>
        </Link>
      </div>
      <PrintBlock>
        <Outlet />
      </PrintBlock>
      <div className={styles.printBtn}>
        <Fab variant="extended" color="primary" onClick={() => window.print()}>
          <PrintRoundedIcon sx={{ mr: 1 }} />
          Print Resume
        </Fab>
      </div>
    </div>
  );
};
export default ResumeLayout;
