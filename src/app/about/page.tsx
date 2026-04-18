import { buildMetadata } from 'lib/metadata';
import { about } from 'data/about';
import AboutScene from 'scenes/about';

export const metadata = buildMetadata({
  suffix: `Software Developer`,
  description: `My name is Oleksii Kachan and I'm a software developer`,
  path: `/about`,
});

const AboutPage = () => <AboutScene data={about} />;

export default AboutPage;
