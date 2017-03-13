import React, {Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Circle } from 'rc-progress';
import env from '../constants/env';
var actionStyles = {
  paddingTop: '20px',
  paddingBottom: '20px',
  textAlign:'center',
}
var alignedItem = {
  marginRight: '20px'
}

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      energyEfficiency: 0,
      availablePercentage: 0
    }

  }

  async getLibrary() {
    try {
      let res = await fetch(`${env.BACKEND_URL}/api/v1/global`)

      let json = await res.json();
      //console.log(json);
      var percentage = parseInt((json.vacantSeats * 100)/json.capacity, 10);
      console.log(json);
      this.setState({
        energyEfficiency: json.energyEfficiency,
        availablePercentage: percentage,
      });
    } catch (ex) {
      console.log('parsing failed', ex)
    }
  }
  componentDidMount(){
    this.getLibrary();
  }
  render() {
    return (
    <div>
      <Card>
        <CardMedia
          overlay={<CardTitle title="Welcome to StudyHunter"/>}
        >
          <img alt="Library Header" className="main-image" src="//www.ucl.ac.uk/new-students/newsfeed/0000-student-life-new/ucl_library.jpg" />
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
            <Circle percent={this.state.energyEfficiency} strokeWidth="10" trailWidth="10" strokeColor="#43A047 "/>
          </div>
        </div>
        <div className="circleProgress">
          <p> Free spaces </p>
          <div className="circleSize">
            <Circle percent={this.state.availablePercentage} strokeWidth="10" trailWidth="10" strokeColor="#43A047 "/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Dashboard;
