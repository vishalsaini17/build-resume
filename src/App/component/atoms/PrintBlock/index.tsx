import { ReactNode } from "react"

import { Paper } from "@mui/material"
import styles from './printBlock.module.scss'

type props = {
  children: ReactNode
}

const PrintBlock: React.FC<props> = ({ children }) => {
  return (
    <Paper className={styles.printViewBlock}>
      <div className={styles.printBlock}>
        {children}
      </div>
    </Paper>
  )
}
export default PrintBlock