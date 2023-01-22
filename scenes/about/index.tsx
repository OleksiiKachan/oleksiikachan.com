import Header from './components/header';
import ReactMarkdown from 'react-markdown';

import { Paragraph } from './styled';

const About = ({
  data,
}: {
  data: { name: string; title: string; image: string; intro: string };
}) => {
  return (
    <>
      <Header data={data} />
      <Paragraph>
        <ReactMarkdown>{data.intro}</ReactMarkdown>
      </Paragraph>
    </>
  );
};

export default About;
