import React from 'react';
import { PersonList } from '../sw-components/item-lists';
import PersonDetails from '../sw-components/person-details';
import Row from '../row';
import ErrorBoundary from '../error-boundary/error-boundary';
import { withRouter } from 'react-router-dom'

const PeoplePage = ({ history, match }) => {
  return (
    <ErrorBoundary>
      <Row 
        left = { <PersonList onItemSelected={ (id) => history.push(id) }  /> }
        right = { <PersonDetails itemId = { match.params.id } /> }
      />
    </ErrorBoundary>
  )
}

export default withRouter(PeoplePage);