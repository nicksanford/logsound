'use strict'

import 'bootstrap-webpack';
import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-bootstrap';

const App = class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.video = this.video.bind(this);
  }

  video() {
    if (this.props.video_id) {
      let src = `https://www.youtube.com/embed/${this.props.video_id}?enablejsapi=1&origin=${location.href}&autoplay=1&rel=0`;
      return(
        <iframe id="video" type="text/html" width="640" height="390" src={src} frameBorder="0"></iframe>
      );
    } else {
      return(null);
    }
  }

  render() {
    return(
      <div className='container'>
        <Row>
          <Col xs={12} className='text-center'>
            {this.video()}
          </Col>
        </Row>
      </div>
    );
  }
};

export default App;
