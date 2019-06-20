import React, { Component } from 'react'
import Spinner from '../spinner'

const withData = (View) => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount = () => {
      this.update();
    }
    
    componentDidUpdate = (prevProps) => {
      if (prevProps.getData !== this.props.getData) {
        this.update();
      }  
    }

    update = () => {
      this.props.getData()
        .then(data => {
          this.setState({
            data  
          })
        });  
    };

    render() {
      const { data } = this.state;
      if (!data) {
        return <Spinner />
      } else {
        return(
          <View {...this.props} data = { data } />
        )
      }
    };
  }
};

export default withData;