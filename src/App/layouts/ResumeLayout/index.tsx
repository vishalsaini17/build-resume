import { ArrowBackIos } from "@mui/icons-material";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import { Button, Fab } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../../../AppContext";
import Link from "../../component/atoms/Link";
import PrintBlock from "../../component/atoms/PrintBlock";
import styles from "./resumeLayout.module.scss";

type props = {

};
export type resumeTemplateProps = "simple" | "ats";

const ResumeLayout: React.FC<props> = () => { 
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [useNewFormat , setUseNewFormat] = useState(false);
  const {appDispatch , appState} = useAppContext();
  console.log(appState , "appstate button");
  
  const handleClick = () => {
    setUseNewFormat(prev => !prev)
    console.log("logged");
    appDispatch({type:"changeTemplate" , payload:"ats"});
    

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
      {/* <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Template 1</MenuItem>
        <MenuItem onClick={handleClose}>Template 2</MenuItem>
      </Menu> */}
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
