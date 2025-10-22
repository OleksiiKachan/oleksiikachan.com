import Image from 'next/image';
import Link from 'next/link';

import styles from './projects.module.scss';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  coverImage: string;
  shortStack: string[];
  longStack: string[];
  teamSize: string;
  client: Array<{ name: string; url: string }>;
  partner?: Array<{ name: string; url: string }>;
  projectType: string;
  settings: { color: string };
  externalResources: Array<{ url: string; name: string }>;
}

const Projects: React.FC<{
  data: {
    title: string;
    projects: Project[];
  };
}> = ({ data: { title, projects } }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <ol>
        {projects.map((project) => (
          <li key={project.id}>
            <article className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  alt=""
                  role="presentation"
                  src={project.image}
                  width={800}
                  height={480}
                  priority
                />
                <div className={styles.projectBadge}>{project.projectType}</div>
                <h2 className={styles.projectTitle}>{project.title}</h2>
              </div>
              <div className={styles.projectContent}>
                <p>{project.shortDescription}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className={styles.viewButton}
                >
                  View details
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Projects;
