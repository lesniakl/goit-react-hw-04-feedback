import Notification from 'components/Notification/Notification';
import React, { Component } from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  render() {
    if (!this.props.total) {
      return <Notification message="There is no feedback" />;
    }
    return (
      <>
        <span className={css.statistic}>
          <b>Good:</b> {this.props.good}
        </span>
        <span className={css.statistic}>
          <b>Neutral:</b> {this.props.neutral}
        </span>
        <span className={css.statistic}>
          <b>Bad:</b> {this.props.bad}
        </span>
        <span className={css.statistic}>
          <b>Total:</b> {this.props.total}
        </span>
        <span className={css.statistic}>
          <b>Positive feedback:</b> {this.props.positivePercentage}
        </span>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
