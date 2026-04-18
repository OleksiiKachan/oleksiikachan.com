import type { Certification } from 'data/about';
import styles from './certifications.module.scss';

type CertificationsProps = {
  certifications: readonly Certification[];
};

const Certifications = ({ certifications }: CertificationsProps) => {
  return (
    <section className={styles.container}>
      <h3>{`Certifications`}</h3>
      <ul>
        {certifications.map((cert) => (
          <li key={cert.name}>
            <span>{cert.name}</span>
            <span className={styles.meta}>{`${cert.issuer} · ${cert.year}`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
