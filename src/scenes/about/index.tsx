import ReactMarkdown from 'react-markdown';

import Helmet, { MetaData } from 'components/helmet';
import SocialButton from 'components/social-button';

import Header from './components/header';
import { Paragraph, SocialMedia } from './styled';

const About = ({
  data,
}: {
  data: {
    meta: MetaData;
    name: string;
    title: string;
    image: string;
    intro: string;
    links: Array<{ type: string; href: string }>;
  };
}) => {
  return (
    <>
      <Helmet data={data.meta} />
      <Header data={data} />
      <Paragraph>
        <ReactMarkdown>{data.intro}</ReactMarkdown>
      </Paragraph>
      <SocialMedia>
        <li>
          <h3>{`Follow me:`}</h3>
        </li>
        {data.links.map((link) => (
          <li key={link.type}>
            <SocialButton type={link.type} href={link.href} />
          </li>
        ))}
      </SocialMedia>
    </>
  );
};

export default About;
