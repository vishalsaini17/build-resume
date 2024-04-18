import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import styles from './sectionResumeBasic.module.scss';

type props = {
  title?: string;
  children?: ReactNode 
}

const SectionResumeATS: React.FC<props> = ({title, children}) => {
  return (
    <section className={styles.sectionATS}>
      {title && <Typography component={'h2'} variant="h5" className={styles.sectionTitle}>{title}</Typography>}
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  )
}
export default SectionResumeATS