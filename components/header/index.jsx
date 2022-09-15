import { useState } from 'react';
import { useWonderEngineContext } from 'wonder-engine';
import { Container } from './styled';
import NavButton from '../navigation-button';
import Navigation from '../navigation';
import Image from 'next/image';

const Header = () => {
  const { Link } = useWonderEngineContext();

  const [_opened, setOpened] = useState(false);

  return (
    <Container>
      <Navigation opened={_opened} />
      <Link href="/">
        <a>
          <Image
            alt="Home"
            width={250}
            height={100}
            src={`https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_horizontal_dark.svg`}
          />
        </a>
      </Link>
      <NavButton opened={_opened} onClick={() => setOpened((prev) => !prev)} />
    </Container>
  );
};

export default Header;
