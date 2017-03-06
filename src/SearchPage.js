import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Library from 'material-ui/svg-icons/action/account-balance';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'whatwg-fetch';
import { Link } from 'react-router';
const underlineStyle = {
  borderColor: 'orange'
}

class SearchPage extends Component {
  state = {
    title: "StudyHunter",
    open: false,
    spaces: [],
    searchTerm: ''
  };

  handleToggle = () => this.setState({open: !this.state.open});
  handleSearch = (e) => {
    if(e.target.value.length>=3)
    {
      var self = this;
      this.setState({searchTerm: e.target.value});
      fetch('http://localhost:4000/api/v1/search?q=' + self.state.searchTerm)
     .then(function(response) {
       return response.json()
     }).then(function(json) {
       console.log('parsed json', json)

       //cardarray = json.results;
       self.setState({spaces: json})
     }).catch(function(ex) {
       console.log('parsing failed', ex)
     })

    }
  }

  render() {
    return (
      <div>
      <Link to="/"><RaisedButton className="back-button" primary={true} label="< Back" /></Link>
        <center><TextField
      hintText="Search here"
      underlineStyle={underlineStyle}
      onChange = {this.handleSearch}
    /></center>
      <div className="list-container">
      <List>
      {this.state.spaces.map(function(item, i){
          console.log(item);
          return (<ListItem leftIcon={<Library />} key={i} primaryText={item.name} />)
        },this)}
      </List>
      </div>
      </div>
    );
  }
}

export default SearchPage;
