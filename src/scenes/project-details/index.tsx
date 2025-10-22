import Image from 'next/image';
import Link from 'next/link';

import styles from './project-details.module.scss';

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
  additionalImages?: Array<{ url: string; alt: string }>;
}

const ProjectDetails: React.FC<{
  project: Project;
}> = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.backLink}>
        <Link href="/projects">← Back to Projects</Link>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            alt={project.title}
            src={project.coverImage}
            width={1200}
            height={600}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.projectMeta}>
            <span className={styles.projectType}>{project.projectType}</span>
          </div>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.projectDescription}>
            {project.shortDescription}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <div className={styles.section}>
            <h2>About this project</h2>
            <p>{project.longDescription}</p>
          </div>

          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className={styles.section}>
              <h2>Project Gallery</h2>
              <div className={styles.imageGallery}>
                {project.additionalImages.map((image, index) => (
                  <div key={index} className={styles.galleryImage}>
                    <Image
                      alt={image.alt}
                      src={image.url}
                      width={800}
                      height={600}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.sidebar}>
          <div className={styles.section}>
            <h3>Tech Stack</h3>
            <div className={styles.techGrid}>
              {project.longStack.map((tech) => (
                <span key={tech} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3>Client</h3>
            <ul className={styles.linkList}>
              {project.client.map((client, index) => (
                <li key={index}>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    {client.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {project.partner && (
            <div className={styles.section}>
              <h3>Partner</h3>
              <ul className={styles.linkList}>
                {project.partner.map((partner, index) => (
                  <li key={index}>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalLink}
                    >
                      {partner.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.section}>
            <h3>External Resources</h3>
            <ul className={styles.linkList}>
              {project.externalResources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
