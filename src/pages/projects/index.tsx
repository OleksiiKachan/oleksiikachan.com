import ProjectsScene from 'scenes/projects';

const Projects = ProjectsScene;

export const getStaticProps = async () => {
  return {
    props: {
      data: {
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
            image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674521318/portfolio/images/projects/nobul-next.png`,
          },
          {
            id: `nobul-plumber`,
            title: `Nobul Plumber Service`,
            shortDescription: `DevOps automation tool`,
            image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674521245/portfolio/images/projects/nobul-plumber.png`,
          },
          {
            id: `nobul-ab-testing`,
            title: `Nobul A/B Testing Engine`,
            shortDescription: `Customizable system to run a/b experiments`,
            image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674521894/portfolio/images/projects/nobul-ab-testing.png`,
          },
          {
            id: `tdm`,
            title: `OLSOM Tools Data Manager`,
            shortDescription: `Advanced manufacturing data collection and management solution`,
            image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674522062/portfolio/images/projects/tdm.png`,
          },
          {
            id: `agw`,
            title: `OLSOM AGW`,
            shortDescription: `Real-time low-code MOM platform for manufacturing enterprises`,
            image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674522379/portfolio/images/projects/agw.png`,
          },
          {
            id: `rpod`,
            title: `Hyperloop rPod`,
            shortDescription: `Conceptual, high-speed transportation systems`,
            image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674522508/portfolio/images/projects/rpod.png`,
          },
        ],
      },
    },
  };
};

export default Projects;
