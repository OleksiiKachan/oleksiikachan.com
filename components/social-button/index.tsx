import Image from 'next/image';

import { Container } from './styled';

const SocialButton = ({
  type,
  href,
  size = 48,
}: {
  type: string;
  href: string;
  size?: number;
}) => (
  <Container href={href}>
    <Image
      src={`https://res.cloudinary.com/oleksiikachan/image/upload/v1674435285/portfolio/images/assets/icon-${type}.svg`}
      width={size}
      height={size}
      alt={`${type} link`}
    />
  </Container>
);

export default SocialButton;
