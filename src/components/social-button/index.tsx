import Image from 'next/image';

import { Container } from './styled';

const SocialButton: React.FC<{
  type: string;
  href: string;
  size?: number;
}> = ({ type, href, size = 48 }) => (
  <Container href={href} target="_blank">
    <Image
      src={`https://res.cloudinary.com/oleksiikachan/image/upload/v1674435285/portfolio/images/assets/icon-${type}.svg`}
      width={size}
      height={size}
      alt={`${type} link`}
    />
  </Container>
);

export default SocialButton;
