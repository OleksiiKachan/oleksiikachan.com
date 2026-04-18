import Image from 'next/image';

import styles from './header.module.scss';

type HeaderProps = {
  data: { name: string; title: string; company: string; location: string; image: string };
};

const Header = ({ data: { name, title, company, location, image } }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          width={240}
          height={240}
          alt=""
          role="presentation"
          priority
        />
      </div>
      <hgroup>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className={styles.meta}>{`${company} · ${location}`}</p>
      </hgroup>
    </div>
  );
};

export default Header;
