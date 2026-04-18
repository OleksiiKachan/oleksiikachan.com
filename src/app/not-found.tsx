import { buildMetadata } from 'lib/metadata';
import NotFoundScene from 'scenes/not-found';

export const metadata = buildMetadata({
  suffix: `404 - Page Not Found`,
  description: `The page you are looking for could not be found.`,
});

const NotFoundPage = () => {
  return <NotFoundScene />;
};

export default NotFoundPage;
