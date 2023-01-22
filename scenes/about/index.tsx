import Header from './components/header';
import ReactMarkdown from 'react-markdown';

import { Paragraph } from './styled';
import Helmet, { MetaData } from '../../components/helmet';

const About = ({
  data,
}: {
  data: {
    meta: MetaData;
    name: string;
    title: string;
    image: string;
    intro: string;
  };
}) => {
  return (
    <>
      <Helmet data={data.meta} />
      <Header data={data} />
      <Paragraph>
        <ReactMarkdown>{data.intro}</ReactMarkdown>
      </Paragraph>
    </>
  );
};

export default About;
