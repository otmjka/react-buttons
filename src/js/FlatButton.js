import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

import Button from './Button';

export default class FlatButton extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    color: PropTypes.string
  }

  static defaultProps = {
    color: 'default',
  }

  render() {
    const { className, color, ...props } = this.props;
    const fullClassName = classnames(className, 'flat-btn', `flat-btn-${color}`);

    return <Button {...props} className={fullClassName} />;
  }
}
