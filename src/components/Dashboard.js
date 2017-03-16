import React, {Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
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
    } catch (e) {
      console.log('parsing failed', e);
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

      <div className="description">
        <div className="grey-textarea">
          <div>Browse all of the available libraries or search for your favorite one. We'll show you where the free spaces are.</div>
          <center>
            <div className="circleProgress">
              <p> Free spaces </p>
              <div className="circleSize">
                <Circle
                  percent={this.state.availablePercentage}
                  strokeWidth="10"
                  trailWidth="10"
                  strokeColor="#43A047 "/>
              </div>
            </div>
          </center>
        </div>
        <div className="colored-textarea">
          <div>We ask of you to sit next to other people, so that we can save energy.</div>
          <center>
            <div className="circleProgress">
              <p> Energy efficiency </p>
              <div className="circleSize">
                <Circle
                  percent={this.state.energyEfficiency}
                  strokeWidth="10"
                  trailWidth="10"
                  strokeColor="#81C784 "/>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
    );
  }
}

export default Dashboard;
