import React from 'react';

export default class SubmitError extends React.Component{
  state = {
    hasError: false
  }
  static getDerivedStateFromError(err){
    return{ hasError:true}
  }
  render(){
    if(this.state.hasError){
      return (<div>
        An Error has occured
      </div>)

    }else{
      return this.props.children;
    }
  }
}