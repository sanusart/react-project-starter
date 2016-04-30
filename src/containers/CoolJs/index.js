import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as allActions from '../../actions/CoolJs';
import CoolJs from '../../components/CoolJs/CoolJs';

class CoolJsApp extends Component {

  render() {
    const {actions, cooljs} = this.props;
    return <CoolJs actions={actions} cooljs={cooljs}/>;
  }

}

CoolJsApp.displayName = 'CoolJsApp';

CoolJsApp.propTypes = {
  actions: PropTypes.object.isRequired,
  cooljs: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    cooljs: state.cooljs
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actionMap = {
    actions: bindActionCreators(allActions, dispatch)
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(CoolJsApp);
