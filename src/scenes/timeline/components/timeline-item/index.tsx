import useSystemConfigContext from 'client/system-config-context';
import { Container, Circle, Content } from './styled';

type TimeLineItem = {
  title: string;
  dates: string;
  subtitle: string;
};

const TimelineItem: React.FC<{
  item: TimeLineItem;
  side: `right` | `left`;
  index: number;
}> = ({ item, side, index }) => {
  const { breakpoint } = useSystemConfigContext();

  return (
    <Container $side={side}>
      <Circle
        animate={{ scale: [0, 1], y: `-50%` }}
        transition={{ duration: 0.7, type: `spring`, delay: 0.4 + 0.1 * index }}
      />
      <Content
        animate={
          side === `left` && breakpoint === `desktop`
            ? { opacity: [0, 1], x: [`-100%`, `0%`] }
            : { opacity: [0, 1], x: [`100%`, `0%`] }
        }
        transition={{ duration: 0.7, type: `spring`, delay: 0.2 + 0.1 * index }}
      >
        <h2>{item.title}</h2>
        <p>{item.dates}</p>
        <h3>{item.subtitle}</h3>
      </Content>
    </Container>
  );
};

export default TimelineItem;
