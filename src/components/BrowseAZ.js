import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router';
import Library from 'material-ui/svg-icons/action/account-balance';
import RaisedButton from 'material-ui/RaisedButton';
import env from '../constants/env';

class BrowseAZ extends Component {
  state = {
    spaces:[]
  }
  async getLibraries() {
    try {
      let res = await fetch(`${env.BACKEND_URL}/api/v1/libraries`)

      let json = await res.json();
      this.setState({spaces: json});
    } catch (ex) {
      console.log('parsing failed', ex)
    }
  }
  componentDidMount(){
    this.getLibraries();
  }
  render() {
    return (
      <div>
        <Link to="/">
          <RaisedButton primary={true} className="back-button" label="< Back"> </RaisedButton>
        </Link>
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

export default BrowseAZ;
