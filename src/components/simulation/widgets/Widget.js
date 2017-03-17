import React, {Component} from 'react';

const styles = {
  container: {
    padding: '10px'
  },
  center: {
    textAlign: 'center'
  },
  content: {
    fontSize: '50px',
    fontWeight: 300,
    padding: '30px 0',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  title: {
    color: '#fff'
  }
}

class Widget extends Component {
  render() {
    const {title, children, backgroundColor} = this.props;

    return (
      <div style={{...styles.container, backgroundColor}}>
        <div style={styles.center}>
          <div style={styles.content}>{children}</div>
          <div style={styles.title}>{title}</div>
        </div>
      </div>
    );
  }

};

Widget.defaultProps = {
  backgroundColor: '#e91e63'
}

Widget.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.node,
  backgroundColor: React.PropTypes.string
}

export default Widget;
