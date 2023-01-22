import Image from 'next/image';

import { Container, ImageWrapper } from './styled';

const Header = ({
  data: { name, title, image },
}: {
  data: { name: string; title: string; image: string };
}) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={image}
          width={240}
          height={240}
          alt=""
          role="presentation"
        />
      </ImageWrapper>
      <hgroup>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </hgroup>
    </Container>
  );
};

export default Header;
