import { ReactNode } from "react"

import styles from './printBlock.module.scss'

type props = {
  children: ReactNode
}

const PrintBlock: React.FC<props> = ({ children }) => {
  return (
    <div className={styles.printBlock}>
      {children}
    </div>
  )
}
export default PrintBlock