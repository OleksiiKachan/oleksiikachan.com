// components added to the manifest can be accessed in browser via /test/{componentName}

export default {
  Header: {
    components: require('../containers/HeaderContainer'),
    props: {},
  },
  ProjectsSection: {
    components: require('../components/ProjectsSection'),
    props: {
      projects: [
        {
          projectType: 'development',
          title: 'AGW MES / WMS for automotive industry',
          shortStack: '.NET Framework',
          coverImage: 'https://picsum.photos/4212/2768',
          description:
            'While working in OLSOM company I worked with some of the biggest automotive manufacturers. I was developing new features for AGW system (which is the MES/WMS for manufacturing). Also I did deployment on new manufactories and support tickets.',
        },
        {
          projectType: 'development',
          title: 'TDM (Tools Data Manager) for automotive industry.',
          shortStack: '.NET Framework',
          coverImage: 'https://picsum.photos/4302/2568',
          description:
            'While working in OLSOM company I worked with some of the biggest automotive manufacturers. I was developing new features for TDM system. TDM - Tools Data Manager - solution that gets and analyse statistical data from automatic screwdrivers on production lines. Product was developed in collaboration with OLSOM L.L.C Catalyst Solutions Inc.',
        },
        {
          projectType: 'design',
          title: 'Hyperloop',
          shortStack: 'UI & UX Design & Development',
          coverImage: 'https://picsum.photos/4312/2468',
          description:
            'I was a volunteering member of rLoop team on SpaceX Hyperloop Contest. I was in System Team & Software Team. I took part in creating Final Design Resource document as a system engineer. UI development was lead by me. I created UI mockups and then in collaboration with one designer we created UI for ground station.',
          tools: ['visio', 'illustrator', 'photoshop'],
        },
        {
          projectType: 'development',
          title: 'Corrugated Cardboard Production System',
          coverImage: 'https://picsum.photos/4312/2869',
          shortStack: 'Ladder Logic',
          description:
            'I did reverse engineering of corrugated industrial cardboard manufacturing system. System was created using ladder logic so I had to understand what is going on there and then create a bunch of technical documentation of how this system works. Project was done in collaboration with Agile Automation Technology L.L.C.',
        },
        {
          projectType: 'development',
          title: 'FTP File Transfer Service',
          shortStack: '.NET Framework',
          coverImage: 'https://picsum.photos/4312/2668',
          description:
            'I created FTP File Transfer Service - windows service that transfers files in multiple threads via FTP to remoter & local locations. Service uses .ini file with configuration',
        },
        {
          projectType: 'design',
          title: 'Logo & Card Design',
          shortStack: 'Personal Branding',
          coverImage: 'https://picsum.photos/4232/2868',
          description:
            'My very first branding project was creating brand of myself. I defined 2 main colors, created logo, designed 2-side business card. Business card does not have title of person, because I do not want to put myself into frames of who I can be.',
        },
        {
          projectType: 'design',
          title: 'Logo & Card Design',
          shortStack: 'Personal Branding',
          coverImage: 'https://picsum.photos/4313/2868',
          description:
            'I created brand for my mother as for financial services provider. I defined 2 main colors, created logo, designed 2-side business card.',
        },
        {
          projectType: 'design',
          title: 'Logo & Card Design',
          shortStack: 'Personal Branding',
          coverImage: 'https://picsum.photos/4312/2860',
          description:
            'I created brand for financial consultant from Ukraine. I defined 2 main colors, created logo, designed 2-side business card and created graphic candle-chart as visual element for business card. Candle-chart displays that person is connected with advanced financial operations.',
        },
      ],
    },
  },
  ButtonWithModal: {
    components: require('../components/ButtonWithModal'),
    props: {
      item: {
        id: 'kpi',
        school:
          'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
        degree: 'Bachelor of Software Engineering',
        department:
          'Faculty of Informatics and Computer Science, Department of Technical Cybernetics',
        program: 'Software Engineering',
        dates: '2013-2017',
      },
      type: 'education',
    },
  },
  OutlineButton: {
    components: require('../components/OutlineButton'),
    props: {
      onClick: () => {},
      children: 'See More',
    },
  },
  TimelineSection: {
    components: require('../components/TimelineSection'),
    props: {
      experience: [
        {
          id: 'kontynium-treyd',
          companyTitle: 'Ltd. "Kontynium-Treyd"',
          position:
            'Technician Programmer of administrative and economic department',
          dates: '2014',
          responsibilities: [
            'System administration of the enterprise using 1C: Enterprise (ERP-like platform)',
            'Maintenance of computers, peripheral and specialized equipment (common printers, Zebra printers, electronic scales, fiscal cash registers, etc.)',
          ],
        },
        {
          id: 'rloop',
          companyTitle: 'rLoop Incorporated',
          position: 'Software and Systems Engineer',
          dates: '2016-2017',
          responsibilities: [
            'Software & System engineering',
            'UI & UX Design & Development',
          ],
          projects: [{ id: 'rpod', title: 'Hyperloop rPod' }],
        },
        {
          id: 'olsom',
          companyTitle: 'OLSOM L.L.C',
          position: 'Software Engineer',
          dates: '2017',
          responsibilities: [
            "Development and support of the company's products: AGW modular complex solution for automotive industry; TDM (Tools Data Manager) for automotive industry",
            "Development and support of the client projects based on company's products (1-3-tier automotive manufacturers (Volkswagen, Opel, Tesla, etc.)",
            'Development of outsourced minor projects',
            'Development of internal tools',
          ],
          projects: [
            {
              id: 'agw',
              title: 'AGW modular complex solution for automotive industry',
            },
            { id: 'ftp-service', title: 'FTP Transfer Service' },
            {
              id: 'tdm',
              title: 'TDM (Tools Data Manager) for automotive industry',
            },
            {
              id: 'cardboard-prod',
              title: 'Corrugated Cardboard Production System',
            },
          ],
        },
      ],
      education: [
        {
          id: 'kpi',
          school:
            'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
          degree: 'Bachelor of Software Engineering',
          department:
            'Faculty of Informatics and Computer Science, Department of Technical Cybernetics',
          program: 'Software Engineering',
          dates: '2013-2017',
        },
        {
          id: 'humber',
          school: 'The Humber Institute of Technology and Advanced Learning',
          degree: 'Ontario Graduate Certificate',
          department: 'School of Media Studies & Information Technology',
          program: 'Information Technology Solutions',
          dates: '2017-2019',
        },
      ],
    },
  },
};
