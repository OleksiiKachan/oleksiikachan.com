import Helmet, { MetaData } from 'components/helmet';
import Image from 'next/image';
import { Link } from 'wonder-engine';

import { Container, ProjectCard } from './styled';

const CaseStudies = ({
  data: { meta, title, projects },
}: {
  data: {
    meta: MetaData;
    title: string;
    projects: Array<{
      id: string;
      title: string;
      shortDescription: string;
      image: string;
    }>;
  };
}) => {
  return (
    <Container>
      <Helmet data={meta} />
      <h1>{title}</h1>
      <ol>
        {projects.map((item) => (
          <li key={item.id}>
            <ProjectCard>
              <Image
                alt=""
                role="presentation"
                src={item.image}
                width={800}
                height={480}
                priority
              />
              <hgroup>
                <h2>{item.title}</h2>
                <p>{item.shortDescription}</p>
                <Link href={`/case/${item.id}`}>{`Case study`}</Link>
              </hgroup>
            </ProjectCard>
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default CaseStudies;
