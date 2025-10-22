import ReactMarkdown from 'react-markdown';

import SocialButton from 'components/social-button';

import Header from './components/header';
import styles from './about.module.scss';

const About: React.FC<{
  data: {
    name: string;
    title: string;
    image: string;
    intro: string;
    links: Array<{ type: string; href: string }>;
  };
}> = ({ data }) => {
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
