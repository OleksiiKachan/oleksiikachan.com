import type { Certification, Role } from 'data/about';

import Certifications from '../certifications';
import styles from './beyond-code-section.module.scss';

type BeyondCodeSectionProps = {
  roles: ReadonlyArray<Role>;
  certifications: ReadonlyArray<Certification>;
};

const BeyondCodeSection = ({ roles, certifications }: BeyondCodeSectionProps) => {
  const otherCerts = certifications.filter((c) => c.category === `other`);

  return (
    <section className={styles.container}>
      <p className={styles.eyebrow}>{`BEYOND CODE`}</p>
      <ul className={styles.roles}>
        {roles.map((role) => (
          <li key={`${role.title}-${role.org}`}>{`${role.title} — ${role.org}`}</li>
        ))}
      </ul>
      <Certifications certifications={otherCerts} />
    </section>
  );
};

export default BeyondCodeSection;
