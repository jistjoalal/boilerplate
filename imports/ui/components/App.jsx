import React from 'react';
import { Helmet } from 'react-helmet';

import TitleBar from './TitleBar';

export default class App extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>

        <Helmet>
          <title>{title}</title>
        </Helmet>

        <TitleBar title={title}>

          <p>TitleBar child</p>
          
        </TitleBar>

        <div className="section">
          <div className="jumbotron">
            <p>body</p>
          </div>
        </div>

      </div>
    )
  }
}
