import { ReactNode, Component } from 'react';
import ReactDOM from 'react-dom';

/*
    <Portal rootId=''>
      ...children
    </Portal>
*/

type PropsType = {
  children: ReactNode;
  rootId?: string;
};

export default class Portal extends Component<PropsType> {
  render() {
    const portalRoot = document.getElementById(this.props.rootId || 'root');

    const portal = portalRoot
      ? [ReactDOM.createPortal([this.props.children], portalRoot)]
      : [this.props.children];

    return [...portal];
  }
}
