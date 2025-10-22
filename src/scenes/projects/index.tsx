import Helmet, { MetaData } from 'components/helmet';
import Image from 'next/image';
import Link from 'next/link';

import styles from './projects.module.scss';

const Projects: React.FC<{
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
}> = ({ data: { meta, title, projects } }) => {
  return (
    <div className={styles.container}>
      <Helmet data={meta} />
      <h1>{title}</h1>
      <ol>
        {projects.map((item) => (
          <li key={item.id}>
            <article className={styles.projectCard}>
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
                <Link href={`/projects/${item.id}`}>{`See details`}</Link>
              </hgroup>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Projects;
