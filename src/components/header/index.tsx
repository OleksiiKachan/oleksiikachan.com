import Image from 'next/image';
import Link from 'next/link';

import NavButton from 'components/navigation-button';
import Navigation from 'components/navigation';
import useToggle from 'hooks/useToggle';

import styles from './header.module.scss';

const Header: React.FC = () => {
  const [_opened, toggleNavigation] = useToggle(false);

  return (
    <header className={styles.container}>
      <Navigation opened={_opened} onClick={toggleNavigation} />
      <Link href="/">
        <Image
          alt="Home"
          width={250}
          height={100}
          src={`https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_horizontal_dark.svg`}
          className="desktop-min"
        />
        <Image
          alt="Home"
          width={80}
          height={80}
          src={`https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_square_dark.svg`}
          className="tablet-max"
        />
      </Link>
      <NavButton opened={_opened} onClick={toggleNavigation} />
    </header>
  );
};

export default Header;
