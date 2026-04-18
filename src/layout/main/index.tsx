import styles from './main.module.scss';

type LayoutChildrenProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: LayoutChildrenProps) => (
  <div className={styles.mainLayout}>{children}</div>
);

export const MainContent = ({ children }: LayoutChildrenProps) => (
  <main className={styles.mainContent}>{children}</main>
);
