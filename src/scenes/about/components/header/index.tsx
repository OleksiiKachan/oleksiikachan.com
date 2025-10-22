import Image from 'next/image';

import styles from './header.module.scss';

const Header: React.FC<{
  data: { name: string; title: string; image: string };
}> = ({ data: { name, title, image } }) => {
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
      </hgroup>
    </div>
  );
};

export default Header;
