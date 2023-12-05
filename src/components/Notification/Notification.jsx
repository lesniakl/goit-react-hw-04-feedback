import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  render() {
    return <span>{this.props.message}</span>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
