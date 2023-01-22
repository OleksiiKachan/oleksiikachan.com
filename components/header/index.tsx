import { useState } from 'react';
import { Container } from './styled';
import NavButton from '../navigation-button';
import Navigation from '../navigation';
import Image from 'next/image';
import { Link } from 'wonder-engine';

const Header = () => {
  const [_opened, setOpened] = useState(false);

  return (
    <Container>
      <Navigation opened={_opened} onClick={() => setOpened((prev) => !prev)} />
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
      <NavButton opened={_opened} onClick={() => setOpened((prev) => !prev)} />
    </Container>
  );
};

export default Header;
