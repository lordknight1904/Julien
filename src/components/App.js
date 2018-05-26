import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Enquire from './Enquire/Enquire';
import paths from './paths';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { app } = this.props;
    return (
      <div>
        <Helmet
          key="helmet"
          title={app.title}
          titleTemplate=""
          meta={[
            { charset: 'utf-8' },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            {
              name: 'description',
              content: app.description,
            },
          ]}
        />
        <Header key="header" />
        <Switch key="switch">
          {
            paths.map((prop, key) => {
              // console.log(prop);
              return <Route path={prop.path} exact={prop.exact} component={prop.component} key={key} />;
            })
          }
        </Switch>

        <Enquire key="enquire" />
        <Footer key="footer" />
      </div>
    );
  }
}

App.propTypes = {
  app: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
export default withRouter(connect(mapStateToProps)(App));
