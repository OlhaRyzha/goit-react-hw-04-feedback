import { Component } from 'react';
import { Title, Wrap } from './Section.styled';
import PropTypes from 'prop-types';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  render() {
    return (
      <>
        <Title>{this.props.title}</Title>
        <Wrap>{this.props.children}</Wrap>
      </>
    );
  }
}
