import { Container, Circle, Content } from './styled';

const TimelineItem = ({
  item,
  side,
  index,
}: {
  item: any;
  side: `right` | `left`;
  index: number;
}) => {
  return (
    <Container $side={side}>
      <Circle style={{ animationDelay: `${600 + (index / 1.5) * 100}ms` }} />
      <Content
        style={{
          animationDelay: `${400 + (index / 1.5) * 100}ms`,
        }}
      >
        <h2>{item.title}</h2>
        <p>{item.dates}</p>
        <h3>{item.subtitle}</h3>
      </Content>
    </Container>
  );
};

export default TimelineItem;
