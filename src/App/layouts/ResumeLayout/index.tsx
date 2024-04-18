import { ArrowBackIos } from "@mui/icons-material";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import { Button, Fab, Link } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import PrintBlock from "../../component/PrintBlock";
import styles from "./resumeLayout.module.scss";

type props = {

};
export type resumeTemplateProps = "simple" | "ats";

const ResumeLayout: React.FC<props> = () => {

  const handleClick = () => {
    console.log("logged");
  };

  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.navbar}>
        <div>
          <Link href="/">
            <Button variant="text" title="Back" startIcon={<ArrowBackIos />}>
              Back
            </Button>
          </Link>
        </div>
        <div>
          <Button
            id="fade-button"
            onClick={handleClick}
          >
            Change Template
          </Button>
        </div>
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
