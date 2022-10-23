import Link from 'next/link';
import type { WonderEngineContext } from 'wonder-engine';

const WonderContextConfig: WonderEngineContext = {
  Link: (props) => <Link {...props} legacyBehavior={false} />,
};

export default WonderContextConfig;
