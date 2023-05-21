import TimelineScene from 'scenes/timeline';

const Timeline = TimelineScene;

export const getStaticProps = async () => {
  return {
    props: {
      data: {
        meta: {
          title: `Oleksii Kachan | Timeline`,
          description: `Career timelime`,
          image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_portrait_dark.svg`,
          url: `https://oleksiikachan.com/timeline`,
        },
        title: `Timeline`,
        education: [
          {
            id: `kpi`,
            school: `National Technical University of Ukraine "Kyiv Polytechnic Institute"`,
            degree: `Bachelor of Software Engineering`,
            department: `Faculty of Informatics and Computer Science, Department of Technical Cybernetics`,
            program: `Software Engineering`,
            dates: `2013-2017`,
          },
          {
            id: `humber-degree`,
            school: `The Humber Institute of Technology and Advanced Learning`,
            degree: `Ontario Graduate Certificate`,
            department: `School of Media Studies & Information Technology`,
            program: `Information Technology Solutions`,
            dates: `2017-2019`,
          },
        ],
        experience: [
          {
            id: `kontynium-treyd`,
            company: `Ltd. "Kontynium-Treyd"`,
            position: `Technician Programmer of administrative and economic department`,
            dates: `2014`,
            responsibilities: [
              `System administration of the enterprise using 1C: Enterprise (ERP-like platform)`,
              `Maintenance of computers, peripheral and specialized equipment (common printers, Zebra printers, electronic scales, fiscal cash registers, etc.)`,
            ],
          },
          {
            id: `rloop`,
            company: `rLoop Incorporated`,
            position: `Software and Systems Engineer`,
            dates: `2016-2017`,
            responsibilities: [
              `Software and Systems engineer in rLoop Inc as a team member for SpaceX Hyperloop Contest`,
              `Create & maintain design documentation (e.g. Final Design Report)`,
              `UX research`,
              `UI wireframing`,
              `Ground Station System design`,
              `Awards: Best Non-University team at the Design Weekend for SpaceX Hyperloop Competition, Pod Innovation Award`,
            ],
            projects: [{ id: `rpod`, title: `Hyperloop rPod` }],
          },
          {
            id: `olsom`,
            company: `OLSOM L.L.C`,
            position: `Software Engineer`,
            dates: `2017`,
            responsibilities: [
              `Development and maintenance of the company's products: AGW Automitive Manufacturing Solution; TDM (Tools Data Manager) for automotive industry`,
              `Development and maintenance of the client projects based on company's products (1-3-tier automotive manufacturers (Volkswagen, Opel, Tesla, etc.)`,
              `Development of minor outsourced  projects`,
              `Development of internal tools`,
            ],
            projects: [
              {
                id: `agw`,
                title: `AGW. Automitive Manufacturing Solution`,
              },
              {
                id: `tdm`,
                title: `TDM (Tools Data Manager). Manufacturing data collection and management solution`,
              },
            ],
          },
          {
            id: `nobul`,
            company: `Nobul Technologies`,
            position: `Software Developer`,
            dates: `2019 - 2023`,
            responsibilities: [
              `Worked closely with the product team on new features`,
              `Created and implemented a custom A/B testing engine with strapi CMS and React`,
              `Together with another developer, migrated the entire frontend from vanilla React to NextJS`,
              `Improved deployment process by cutting time from more than 7 minutes to under 5 minutes`,
              `Developed custom DevOps tool called "Plumber" which is integrated with github, jira, slack, GCP`,
              `Sole owner/developer for out CMS - Strapi`,
              `Developed, maintained, and integrated all the analytics tools - Universal GA, GA4, GTM, Fullstory, Sentry, Criteo, Google Ads, Facebook Pixel, Twitter Pixel, Quora Pixel, Qualaroo, Trustpilot`,
            ],
            projects: [
              { id: `ui-kt`, title: `Nobul UI Kit and storybook` },
              {
                id: `a-b-testing`,
                title: `Custom A/B testing engine`,
              },
              {
                id: `plumber`,
                title: `Plumber`,
              },
            ],
          },
          {
            id: `humber-prof`,
            company: `The Humber Institute of Technology and Advanced Learning`,
            position: `Part-Time Professor`,
            dates: `Since 2022`,
            responsibilities: [`Teaching XML and JS course`],
          },
          {
            id: `flowspace`,
            company: `Flowspace`,
            position: `Software Engineer`,
            dates: `Since 2023`,
            responsibilities: [`Teaching XML and JS course`],
          },
        ],
      },
    },
  };
};

export default Timeline;
