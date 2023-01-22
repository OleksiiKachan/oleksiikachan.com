const Timeline = ({ data: { title } }: { data: { title: string } }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      data: {
        title: `Timeline`,
      },
    },
  };
};

export default Timeline;
