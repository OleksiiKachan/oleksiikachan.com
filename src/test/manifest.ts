// components added to the manifest can be accessed in browser via /test/{componentName}

export default {
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
          projects: ['rpod'],
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
          projects: ['agw', 'ftp-service', 'tdm', 'cardboard-prod'],
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
