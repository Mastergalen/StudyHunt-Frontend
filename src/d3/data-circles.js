import React from 'react';

const renderCircles = (props) => {
  return (coords, index) => {
    let fill;
    if(index % 2 === 0) {
      fill = 'red';
    } else {
      fill = 'green';
    }

    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[1]),
      r: 40,
      fill: fill,
      key: index
    };
    return <circle style={{color: 'red'}} {...circleProps} />;
  };
};

export default (props) => {
  return <g>{ props.data.map(renderCircles(props)) }</g>
}
