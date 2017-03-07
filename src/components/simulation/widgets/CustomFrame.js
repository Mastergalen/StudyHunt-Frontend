import React from 'react';

const CustomFrame = ({title, children, backgroundColor}) => {
  return (
    <div>
      {children}
    </div>
  );
};

CustomFrame.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.node,
  backgroundColor: React.PropTypes.string
}

export default CustomFrame;
