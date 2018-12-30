import React, { Component } from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ColorActions from '../../../actions/ColorActions';

class PracticeRedux extends Component {
  componentDidMount() {
    this.props.getColor();
  }

  render() {
    const {
      Color: { color }
    } = this.props;
    if (color) {
      console.log(color);
    }
    return (
      <div>
        {color &&
          color.map(item => {
            const { name, hex } = item;
            return (
              <div key={hex} style={{ backgroundColor: hex }}>{`${name}`}</div>
            );
          })}
      </div>
    );
  }
}

export default connect(
  state => _.pick(state, ['Color']),
  dispatch => bindActionCreators({ ...ColorActions }, dispatch)
)(PracticeRedux);
