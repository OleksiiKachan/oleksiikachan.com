import { notFound } from 'next/navigation';
import ProjectDetails from '../../../scenes/project-details';

// This function can be named anything
async function getProjectsData() {
  return {
    meta: {
      title: `Oleksii Kachan | Case Studies`,
      description: `Selected projects`,
      image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_portrait_dark.svg`,
      url: `https://oleksiikachan.com/case`,
    },
    title: `Projects`,
    projects: [
      {
        id: `nobul-web`,
        title: `Nobul Web Platform`,
        shortDescription: `Feature development for Nobul marketplace`,
        longDescription: `As a Software Developer at Nobul, I worked closely with the product team on new features for the real estate marketplace. I was responsible for developing and implementing various frontend features using React and Next.js, ensuring optimal user experience and performance.`,
        image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674521318/portfolio/images/projects/nobul-next.png`,
        coverImage: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674521318/portfolio/images/projects/nobul-next.png`,
        shortStack: [`React`, `Next.js`, `TypeScript`, `SASS`],
        longStack: [
          `React`,
          `Next.js`,
          `TypeScript`,
          `SASS`,
          `Strapi`,
          `Google Analytics`,
          `Sentry`,
        ],
        teamSize: `> 20 people`,
        client: [{ name: `Nobul Technologies`, url: `https://nobul.com` }],
        projectType: `development`,
        settings: { color: `#1a73e8` },
        externalResources: [
          { url: `https://nobul.com`, name: `Nobul Platform` },
        ],
      },
      {
        id: `nobul-plumber`,
        title: `Nobul Plumber Service`,
        shortDescription: `DevOps automation tool`,
        longDescription: `Developed a custom DevOps tool called "Plumber" which is integrated with GitHub, Jira, Slack, and Google Cloud Platform. This tool significantly improved our deployment process by cutting time from more than 7 minutes to under 5 minutes, streamlining our development workflow.`,
        image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674521245/portfolio/images/projects/nobul-plumber.png`,
        coverImage: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674521245/portfolio/images/projects/nobul-plumber.png`,
        shortStack: [`Node.js`, `Docker`, `GitHub API`, `Slack API`],
        longStack: [
          `Node.js`,
          `Docker`,
          `GitHub API`,
          `Slack API`,
          `Jira API`,
          `Google Cloud Platform`,
          `Kubernetes`,
        ],
        teamSize: `2 people`,
        client: [{ name: `Nobul Technologies`, url: `https://nobul.com` }],
        projectType: `development`,
        settings: { color: `#ff6b35` },
        externalResources: [
          { url: `https://github.com`, name: `GitHub Integration` },
        ],
      },
      {
        id: `nobul-ab-testing`,
        title: `Nobul A/B Testing Engine`,
        shortDescription: `Customizable system to run a/b experiments`,
        longDescription: `Created and implemented a custom A/B testing engine with Strapi CMS and React. This system allows the product team to run experiments and measure their impact on user behavior, enabling data-driven decision making for feature development.`,
        image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674521894/portfolio/images/projects/nobul-ab-testing.png`,
        coverImage: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674521894/portfolio/images/projects/nobul-ab-testing.png`,
        shortStack: [`React`, `Strapi`, `JavaScript`, `MongoDB`],
        longStack: [
          `React`,
          `Strapi`,
          `JavaScript`,
          `MongoDB`,
          `Google Analytics`,
          `Custom Analytics`,
        ],
        teamSize: `3 people`,
        client: [{ name: `Nobul Technologies`, url: `https://nobul.com` }],
        projectType: `development`,
        settings: { color: `#9c27b0` },
        externalResources: [{ url: `https://strapi.io`, name: `Strapi CMS` }],
      },
      {
        id: `spotify-app`,
        title: `Marketing Automation Tool`,
        shortDescription: `Automated marketing banner production system for Spotify in collaboration with Candy Digital.`,
        longDescription: `In tight collaboration with Candy Digital, I was working on a concept project for Spotify. The goal was to create a solution to automate marketing banners production process. In terms of measurable goals we had to reduce production time and effort. I had a team of 4 people (including me). I took a couple of roles in this team: Designer, Project Manager, Lead Developer.`,
        image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1563610310/portfolio/images/projects/spotify-app/card.png`,
        coverImage: `https://res.cloudinary.com/oleksiikachan/image/upload/v1558291364/portfolio/images/projects/spotify-app/cover.png`,
        shortStack: [`React`, `Typescript`, `SASS`, `Firebase`],
        longStack: [
          `React`,
          `Typescript`,
          `Redux`,
          `Firebase`,
          `SASS`,
          `Bootstrap`,
          `Figma`,
          `Github`,
          `CircleCI`,
          `Heroku`,
          `Jira`,
        ],
        teamSize: `4 people`,
        partner: [{ name: `Candy Digital`, url: `https://candydigital.co/` }],
        client: [{ name: `Spotify, Inc.`, url: `https://www.spotify.com` }],
        projectType: `development`,
        settings: { color: `#1DB954` },
        externalResources: [
          { url: `https://candydigital.co/`, name: `Candy Digital` },
          { url: `https://www.spotify.com`, name: `Spotify` },
        ],
        additionalImages: [
          {
            url: `https://res.cloudinary.com/oleksiikachan/image/upload/v1558288804/portfolio/images/projects/spotify-app/low-fidelity_prototype.png`,
            alt: `Low-Fidelity Prototype in Figma`,
          },
          {
            url: `https://res.cloudinary.com/oleksiikachan/image/upload/v1558288804/portfolio/images/projects/spotify-app/high-fidelity_prototype.png`,
            alt: `High-Fidelity Prototype in Figma`,
          },
          {
            url: `https://res.cloudinary.com/oleksiikachan/image/upload/v1558289892/portfolio/images/projects/spotify-app/banner-tool.png`,
            alt: `Banner Tool Interface`,
          },
        ],
      },
      {
        id: `agw`,
        title: `OLSOM AGW`,
        shortDescription: `Real-time low-code MOM platform for manufacturing enterprises`,
        longDescription: `AGW software addresses the challenges of workflow automation, real-time data collection, system integration and business insight. It offers scalable, high-performance, reliable and flexible solutions that meet the demand of intelligent process automation for manufacturers, 3PLs, distributors and other spheres of business.`,
        image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674522379/portfolio/images/projects/agw.png`,
        coverImage: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674522379/portfolio/images/projects/agw.png`,
        shortStack: [`.NET Framework`, `C#`, `ASP.NET MVC`, `Javascript`],
        longStack: [
          `.NET Framework`,
          `C#`,
          `ASP.NET MVC`,
          `ASP.NET Web Forms`,
          `Javascript`,
          `jQuery`,
          `MS SQL Server`,
          `Oracle`,
          `Windows Service`,
        ],
        teamSize: `> 10 people`,
        partner: [{ name: `OLSOM LLC`, url: `http://olsom.net/` }],
        client: [
          { name: `Tesla, Inc.`, url: `https://www.tesla.com/` },
          { name: `Hyundai Motor Company`, url: `https://www.hyundai.com` },
          { name: `Varroc Group`, url: `http://www.varrocgroup.com/` },
          {
            name: `Daimler Trucks North America LLC.`,
            url: `https://daimler-trucksnorthamerica.com/`,
          },
        ],
        projectType: `development`,
        settings: { color: `#025c88` },
        externalResources: [
          { url: `http://olsom.net/agw-mes/`, name: `Product Page. AGW MES` },
          { url: `http://olsom.net/agw-wms/`, name: `Product Page. AGW WMS` },
          { url: `http://olsom.net/agw-ip/`, name: `Product Page. AGW IP` },
          { url: `http://olsom.net/`, name: `Company Page. OLSOM LLC` },
        ],
        additionalImages: [
          {
            url: `https://res.cloudinary.com/oleksiikachan/image/upload/v1557523594/portfolio/images/projects/agw/agw_ip.jpg`,
            alt: `AGW IP - Manufacturing Environment`,
          },
          {
            url: `https://res.cloudinary.com/oleksiikachan/image/upload/v1557523623/portfolio/images/projects/agw/agw_mes.jpg`,
            alt: `AGW MES - Manufacturing Execution System`,
          },
          {
            url: `https://res.cloudinary.com/oleksiikachan/image/upload/v1557523594/portfolio/images/projects/agw/agw_wms.jpg`,
            alt: `AGW WMS - Warehouse Management System`,
          },
        ],
      },
      {
        id: `tdm`,
        title: `OLSOM Tools Data Manager`,
        shortDescription: `Advanced manufacturing data collection and management solution`,
        longDescription: `Tools Data Manager ("TDM") is an advanced manufacturing data collection and management solution that features comprehensive functionality for torque data capture and management. TDM is designed to simplify the challenge of connecting, extracting, associating, archiving, analyzing and mobilizing manufacturing data generated by localized shop-floor devices.`,
        image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674522062/portfolio/images/projects/tdm.png`,
        coverImage: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674522062/portfolio/images/projects/tdm.png`,
        shortStack: [`.NET Framework`, `C#`, `ASP.NET MVC`, `Javascript`],
        longStack: [
          `.NET Framework`,
          `C#`,
          `ASP.NET MVC`,
          `ASP.NET Web Forms`,
          `Javascript`,
          `jQuery`,
          `MS SQL Server`,
          `Windows Service`,
        ],
        teamSize: `> 10 people`,
        partner: [
          { name: `OLSOM LLC`, url: `http://olsom.net/` },
          { name: `Catalyst Solutions Inc`, url: `http://www.catalystsi.com/` },
        ],
        client: [
          { name: `Tesla, Inc.`, url: `https://www.tesla.com/` },
          { name: `Hyundai Motor Company`, url: `https://www.hyundai.com` },
          { name: `Varroc Group`, url: `http://www.varrocgroup.com/` },
        ],
        projectType: `development`,
        settings: { color: `#7d0bbb` },
        externalResources: [
          {
            url: `http://www.catalystsi.com/index.php?option=com_content&view=article&id=8&Itemid=12`,
            name: `Product Page`,
          },
          { url: `http://olsom.net/`, name: `Company Page. OLSOM LLC` },
          {
            url: `http://www.catalystsi.com/`,
            name: `Company Page. Catalyst Solutions Inc`,
          },
        ],
      },
      {
        id: `rpod`,
        title: `Hyperloop rPod`,
        shortDescription: `I was a part of open-sourced, crowdfouded project rLoop as a SpaceX Hyperloop Contest contestant.`,
        longDescription: `Hyperloop is a conceptual, high-speed transportation system initially proposed by Elon Musk. The concept consists of passenger and cargo pods being propelled at up to 760 mph in a low pressure tube using sustainable and cost-efficient energy. rLoop is open-sourced, crowd-sourced & crowd-funded community.`,
        image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1563610189/portfolio/images/projects/rpod/card.png`,
        coverImage: `https://res.cloudinary.com/oleksiikachan/image/upload/v1557599880/portfolio/images/projects/rpod/cover.png`,
        shortStack: [`Adobe Illustrator`, `Adobe Photoshop`],
        longStack: [`Adobe Illustrator`, `Adobe Photoshop`],
        teamSize: `> 20 people`,
        partner: [
          { name: `rLoop Incorporated`, url: `https://www.rloop.org/` },
        ],
        client: [
          { name: `SpaceX Hyperloop Contest`, url: `https://www.spacex.com/` },
        ],
        projectType: `design`,
        settings: { color: `#ef7704` },
        externalResources: [
          { url: `https://rloop.org`, name: `Official web site` },
        ],
        additionalImages: [
          {
            url: `https://res.cloudinary.com/oleksiikachan/image/upload/v1557366977/portfolio/images/projects/rpod/telemetry_mock.svg`,
            alt: `Telemetry Station low-fidelity mock-up`,
          },
          {
            url: `https://res.cloudinary.com/oleksiikachan/image/upload/v1557356129/portfolio/images/projects/rpod/telemetry_ui.jpg`,
            alt: `Telemetry Station final UI`,
          },
        ],
      },
    ],
  };
}

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  coverImage: string;
  shortStack: string[];
  longStack: string[];
  teamSize: string;
  client: Array<{ name: string; url: string }>;
  partner?: Array<{ name: string; url: string }>;
  projectType: string;
  settings: { color: string };
  externalResources: Array<{ url: string; name: string }>;
  additionalImages?: Array<{ url: string; alt: string }>;
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getProjectsData();
  const project = data.projects.find((p: Project) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
