import { buildMetadata } from 'lib/metadata';
import { getProjects } from 'data/projects';
import ProjectsScene from 'scenes/projects';

export const metadata = buildMetadata({
  suffix: `Case Studies`,
  description: `Selected projects`,
  path: `/projects`,
});

const ProjectsPage = async () => {
  const projects = getProjects();

  return <ProjectsScene data={{ title: `Projects`, projects }} />;
};

export default ProjectsPage;
