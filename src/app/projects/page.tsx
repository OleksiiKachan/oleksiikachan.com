import { buildMetadata } from 'lib/metadata';
import NotFoundScene from 'scenes/not-found';

export const metadata = buildMetadata({
  suffix: `Case Studies`,
  description: `Selected projects`,
  path: `/projects`,
});

const ProjectsPage = () => <NotFoundScene />;
export default ProjectsPage;
