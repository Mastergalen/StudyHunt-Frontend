import React, {Component} from 'react';
import {Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';
import Library from 'material-ui/svg-icons/action/account-balance';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'whatwg-fetch';
import env from '../constants/env';

const underlineStyle = {
  borderColor: 'orange'
}

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: [],
      searchTerm: ''
    };
  }

  async handleSearch(e) {
    if(e.target.value.length>=3) {
      this.setState({searchTerm: e.target.value});
      try {
        let res = await fetch(`${env.BACKEND_URL}/api/v1/search?q=${this.state.searchTerm}`)

        let json = await res.json();

        this.setState({spaces: json});
        //console.log(json);
      } catch (ex) {
        console.log('parsing failed', ex)
      }
    }
  }

  render() {
    return (
      <div>
        <Link to="/">
          <RaisedButton className="back-button" primary={true} label="< Back" />
        </Link>
        <center>
          <TextField
            hintText="Search here"
            underlineStyle={underlineStyle}
            onChange={this.handleSearch.bind(this)}
          />
        </center>
        <div className="list-container">
        <List>
          {this.state.spaces.map(function(item, i){
            return (<Link to={'/library/' + item.id} key={i} style={{textDecoration:'none'}}><ListItem leftIcon={<Library />} key={i} primaryText={item.name} id={item.id} /></Link>)
          },this)}
        </List>
        </div>
      </div>
    );
  }
}

export default SearchPage;
