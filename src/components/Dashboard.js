import React, {Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Circle } from 'rc-progress';

var actionStyles = {
  paddingTop: '20px',
  paddingBottom: '20px',
  textAlign:'center',
}
var alignedItem = {
  marginRight: '20px'
}

class Dashboard extends Component {
  render() {
    return (
      <div>
      <Card>
        <CardMedia
          overlay={<CardTitle title="Welcome to StudyHunter"/>}
        >
          <img alt="Library Header" className="main-image" src="https://www.ucl.ac.uk/new-students/newsfeed/0000-student-life-new/ucl_library.jpg" />
        </CardMedia>
        <CardActions style={actionStyles}>
        <div>
          <Link to="browse">
            <RaisedButton   style={alignedItem} primary={true} label="Browse A-Z" />
          </Link>

          <Link to="search">
            <RaisedButton primary={true} label="Search" />
          </Link>
        </div>
        </CardActions>

  </Card>
  <CardText>
    Our system aims to help you find study spaces easily.
  </CardText>
  <div className="inLine">
  <div className="circleProgress">
  <p> Energy efficiency </p>
  <div className="circleSize">
  <Circle percent="10" strokeWidth="4" strokeColor="green"/>
  </div>
  </div>
  <div className="circleProgress">
  <p> Free spaces </p>
  <div className="circleSize">
  <Circle percent="10" strokeWidth="4" strokeColor="green"/>
  </div>
  </div>
  </div>
      </div>
    );
  }
}

export default Dashboard;