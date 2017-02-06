import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Line, Circle } from 'rc-progress';
var actionStyles = {
 paddingTop: '20px',
 paddingBottom: '20px',
 textAlign:'center',
}
var alignedItem = {
  marginRight: '20px'
}
var circleProgress = {
  width: '49%',
  textAlign: 'center',
  margin: 0
}
var inLine = {
  display: 'flex',
  textAlign: 'center'
}
var circleSize = {
  width: '70%',
  marginLeft:'15%'
}
class MainPage extends Component {

  render() {
    return (
      <div>
      <Card>

        <CardMedia
          overlay={<CardTitle title="Welcome to StudyHunter"/>}
        >

          <img className="main-image" src="https://www.ucl.ac.uk/new-students/newsfeed/0000-student-life-new/ucl_library.jpg" />

        </CardMedia>
        <CardActions style={actionStyles}>
        <div >
        <RaisedButton   style={alignedItem} primary={true} label="Browse A-Z" />

        <RaisedButton primary={true} label="Search" />
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

export default MainPage;
