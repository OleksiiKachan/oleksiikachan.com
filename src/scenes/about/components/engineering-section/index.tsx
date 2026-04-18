import type { Certification } from 'data/about';

import Certifications from '../certifications';
import Skills from '../skills';
import styles from './engineering-section.module.scss';

type EngineeringSectionProps = {
  skills: ReadonlyArray<string>;
  certifications: ReadonlyArray<Certification>;
};

const EngineeringSection = ({ skills, certifications }: EngineeringSectionProps) => {
  const techCerts = certifications.filter((c) => c.category === `tech`);

  return (
    <section className={styles.panel}>
      <p className={styles.eyebrow}>{`ENGINEERING`}</p>
      <Skills skills={skills} />
      <Certifications certifications={techCerts} />
    </section>
  );
};

export default EngineeringSection;
