import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import { Fab } from "@mui/material";
import { Outlet } from "react-router-dom";
import PrintBlock from "../../component/atoms/PrintBlock";

import styles from './resumeLayout.module.scss';

type props = {}

const ResumeLayout: React.FC<props> = () => {
  return (
    <div className={styles.layoutWrapper}>
      <h3>header content</h3>
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
  )
}
export default ResumeLayout