import AboutScene from '../scenes/about';

const About = AboutScene;

export const getStaticProps = async () => {
  return {
    props: {
      data: {
        title: 'title',
      },
    },
  };
};

export default About;
