import React, { Component } from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './style.css';
import Locale from './Locale';
import Header from './Header';
import Panel from './Panel';
import RankingActions from '../../../actions/RankingActions';

class PatientsRanking extends Component {
  componentDidMount() {
    this.props.getRanking();
  }

  render() {
    const {
      Ranking: {
        ranking: { inTreatment, waitingList }
      }
    } = this.props;

    return (
      <div className="rankingScreen">
        <Header />
        <hr />
        {inTreatment &&
          waitingList && (
            <div className="panelContainer">
              <Panel
                inTreatment={inTreatment[0]}
                waitingList={_.chunk(waitingList, 3)[0]}
              />
              <Panel
                inTreatment={inTreatment[1]}
                waitingList={_.chunk(waitingList, 3)[1]}
              />
            </div>
          )}
        <hr />
        <div className="footer">{Locale.text.footerTitle}</div>
      </div>
    );
  }
}

export default connect(
  state => _.pick(state, ['Ranking']),
  dispatch => bindActionCreators({ ...RankingActions }, dispatch)
)(PatientsRanking);
