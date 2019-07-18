import React from 'react';
import { StarshipList } from '../sw-components/item-lists';
import ErrorBoundary from '../error-boundary/error-boundary';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({history}) => {
  return (
    <ErrorBoundary>
      <StarshipList onItemSelected={ (item) => history.push(item) } />
    </ErrorBoundary>
  );
}

export default withRouter(StarshipPage);