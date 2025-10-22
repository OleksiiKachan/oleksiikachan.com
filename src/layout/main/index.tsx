import styles from './main.module.scss';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className={styles.mainLayout}>{children}</div>;

export const MainContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <main className={styles.mainContent}>{children}</main>;
