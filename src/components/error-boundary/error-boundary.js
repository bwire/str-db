import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

import './error-boundary.css';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    return this.state.hasError ? <ErrorIndicator /> : this.props.children;
  }
}