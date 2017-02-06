import React, {Component} from 'react';




class BrowseAZ extends Component {
  state = {
    title: "StudyHunter",
    open: false
  };

  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <div>
      </div>
    );
  }
}

export default BrowseAZ;
