import ReactMarkdown from 'react-markdown';

import SocialButton from 'components/social-button';
import type { AboutData } from 'data/about';

import Certifications from './components/certifications';
import Header from './components/header';
import Skills from './components/skills';
import styles from './about.module.scss';

type AboutProps = {
  data: AboutData;
};

const About = ({ data }: AboutProps) => {
  return (
    <>
      <Header data={data} />
      <div className={styles.paragraph}>
        <ReactMarkdown>{data.intro}</ReactMarkdown>
      </div>
      <Skills skills={data.skills} />
      <Certifications certifications={data.certifications} />
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
