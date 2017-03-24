import React, { Component } from 'react';

class SeatMap extends Component {

  render() {
    const {seats, isLightOn} = this.props;

    let seatMap = [];

    let tableId = 1;

    for (var i = 0; i< seats.length; i+=4){
      seatMap.push({table:tableId++,
        seat1: seats[i],
        seat2: seats[i+1],
        seat3: seats[i+2],
        seat4: seats[i+3]
      });
    }


    /*
    <div className="four-seats">
    <div className="table-container"> <div className="half-table-top"> Table </div> </div>
    <div className="empty-seat"> 1 </div>
    <div className="taken-seat"> 2 </div>
    <div className="empty-seat"> 3 </div>
    <div className="empty-seat"> 4 </div>
    <div className="table-container"> <div className="half-table-bottom"> Table </div> </div>
    </div>
    */

    let tableText = "Table";

    if(typeof isLightOn !== 'undefined') {
      tableText = isLightOn ? "Lights on" : "Lights off";
    }

    return (
      <div className="seating-area">
        {seatMap.map(function(item,i) {
          return(
            <div className="four-seats" key={i}>
              {item.seat1.is_vacant ? <div className="empty-seat"> {item.seat1.id} </div> : <div className="taken-seat"> {item.seat1.id} </div>}
              {item.seat2.is_vacant ? <div className="empty-seat"> {item.seat2.id} </div> : <div className="taken-seat"> {item.seat2.id} </div>}
              <div className="table-container">
                <div className="table">
                  {tableText}
                </div>
              </div>
              {item.seat3.is_vacant ? <div className="empty-seat"> {item.seat3.id} </div> : <div className="taken-seat"> {item.seat3.id} </div>}
              {item.seat4.is_vacant ? <div className="empty-seat"> {item.seat4.id} </div> : <div className="taken-seat"> {item.seat4.id} </div>}
            </div>
          );
        })}
      </div>
    );
  }
}

SeatMap.propTypes = {
  seats: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  isLightOn: React.PropTypes.bool
};

export default SeatMap;
