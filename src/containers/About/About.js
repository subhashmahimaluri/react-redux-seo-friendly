import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  render() {
    return (
      <div className="container">
        <h1>About Us</h1>
          <Helmet title="Travel + Leisure About Us"
            meta={[{'name': 'description', 'content': 'Travel + Leisure About us Description'}
            ]} />

          <p>About Us Page</p>

      </div>
    );
  }
}
