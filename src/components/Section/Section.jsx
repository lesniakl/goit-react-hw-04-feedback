import React, { Component } from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export default class Section extends Component {
  render() {
    return (
      <section className={css.sectionContainer}>
        <h2 className={css.title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};
