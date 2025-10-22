import Image from 'next/image';
import Link from 'next/link';

import styles from './social-button.module.scss';

const SocialButton: React.FC<{
  type: string;
  href: string;
  size?: number;
}> = ({ type, href, size = 48 }) => (
  <Link href={href} target="_blank" className={styles.container}>
    <Image
      src={`https://res.cloudinary.com/oleksiikachan/image/upload/v1674435285/portfolio/images/assets/icon-${type}.svg`}
      width={size}
      height={size}
      alt={`${type} link`}
    />
  </Link>
);

export default SocialButton;
