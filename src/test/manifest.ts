// components added to the manifest can be accessed in browser via /test/{componentName}

export default {
  ExperienceTimelineSection: {
    components: require('../components/ExperienceTimelineSection'),
    props: {
      timeline: [
        {
          time: '2014',
          title:
            'Technician Programmer of administrative and economic department',
          description: 'Ltd. "Kontynium-Treyd"',
        },
        {
          time: '2016-2017',
          title: 'Software and Systems Engineer',
          description: 'rLoop Incorporated',
        },
        {
          time: '2013-2017',
          title: 'Bachelor of Software Engineering',
          description:
            'National Technical University of Ukraine "Kyiv Polytechnic Institute", Faculty of Information and Computer Science, Technical Cybernetics Department',
        },
        {
          time: '2017',
          title: 'Software Engineer',
          description: 'OLSOM L.L.C',
        },
        {
          time: '2017-2019',
          title: 'Postgraduate Degree',
          description:
            'The Humber Institute of Technology and Advanced Learning,School of Media Studies & Information Technology, Information Technology Solutions',
        },
      ],
    },
  },
};
