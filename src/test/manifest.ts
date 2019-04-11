// components added to the manifest can be accessed in browser via /test/{componentName}

export default {
  OutlineButton: {
    components: require('../components/OutlineButton'),
    props: {
      onClick: () => {},
      children: 'See More',
    },
  },
  ExperienceTimelineSection: {
    components: require('../components/ExperienceTimelineSection'),
    props: {
      timeline: [
        {
          title:
            'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
          subtitle: 'Bachelor of Software Engineering',
          dates: '2013-2017',
          type: 'education',
        },
        {
          title: 'Ltd. "Kontynium-Treyd"',
          subtitle:
            'Technician Programmer of administrative and economic department',
          dates: '2014',
          type: 'work',
        },
        {
          title: 'rLoop Incorporated',
          subtitle: 'Software and Systems Engineer',
          dates: '2016-2017',
          type: 'work',
        },
        {
          title: 'OLSOM L.L.C',
          subtitle: 'Software Engineer',
          dates: '2017',
          type: 'work',
        },
        {
          title: 'The Humber Institute of Technology and Advanced Learning',
          subtitle: 'Ontario Graduate Certificate',
          dates: '2017-2019',
          type: 'education',
        },
      ],
    },
  },
};
