import ReactMarkdown from 'react-markdown';

import SocialButton from 'components/social-button';
import type { AboutData } from 'data/about';

import Header from './components/header';
import styles from './about.module.scss';

const About: React.FC<{ data: AboutData }> = ({ data }) => {
  return (
    <>
      <Header data={data} />
      <div className={styles.paragraph}>
        <ReactMarkdown>{data.intro}</ReactMarkdown>
      </div>
      <ul className={styles.socialMedia}>
        <li>
          <h3>{`Follow me:`}</h3>
        </li>
        {data.links.map((link) => (
          <li key={link.type}>
            <SocialButton type={link.type} href={link.href} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default About;
