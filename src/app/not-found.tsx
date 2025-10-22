import type { Metadata } from 'next';
import NotFoundScene from 'scenes/not-found';

export const metadata: Metadata = {
  title: `404 - Page Not Found`,
  description: `The page you are looking for could not be found.`,
};

export default function NotFoundPage() {
  return <NotFoundScene />;
}
