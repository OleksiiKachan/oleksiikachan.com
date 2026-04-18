import styles from './skills.module.scss';

type SkillsProps = {
  skills: readonly string[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className={styles.container}>
      <h3>{`Tech Stack`}</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
