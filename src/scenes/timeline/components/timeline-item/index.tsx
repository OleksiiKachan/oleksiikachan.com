import {
  Container,
  Circle,
  Content,
  ContentHeader,
  DescriptionList,
} from './styled';
import useSystemConfigContext from 'client/system-config-context';
import { motion, AnimatePresence } from 'framer-motion';
import useToggle from 'hooks/useToggle';
import { useMemo } from 'react';

const TimelineItem = ({
  item,
  side,
  index,
}: {
  item: any;
  side: `right` | `left`;
  index: number;
}) => {
  const { breakpoint } = useSystemConfigContext();

  const [opened, toggle] = useToggle();

  const isClickable = useMemo(() => item.responsibilities?.length > 0, [item]);

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
        <ContentHeader onClick={toggle} $clickable={isClickable}>
          <h2>{item.title}</h2>
          <p>{item.dates}</p>
          <h3>{item.subtitle}</h3>
        </ContentHeader>
        {isClickable && (
          <AnimatePresence initial={false}>
            {opened && (
              <motion.section
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: `auto` },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <DescriptionList>
                  {item.responsibilities.map((caption: string) => (
                    <li key={caption}>
                      <p>{caption}</p>
                    </li>
                  ))}
                </DescriptionList>
              </motion.section>
            )}
          </AnimatePresence>
        )}
      </Content>
    </Container>
  );
};

export default TimelineItem;
