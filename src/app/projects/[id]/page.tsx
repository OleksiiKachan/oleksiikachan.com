import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from 'lib/metadata';
import { getProjectById } from 'data/projects';
import ProjectDetails from '../../../scenes/project-details';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();
  return buildMetadata({
    suffix: project.title,
    description: project.shortDescription,
    path: `/projects/${id}`,
    ogImage: project.coverImage,
  });
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
};

export default ProjectDetailsPage;
