import 'phoenix_html'
import socket from './socket';
import jQuery from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Row, Col } from 'react-bootstrap';
let video_id = null;
let mountPoint = document.getElementById('react')

socket.connect()
let channel = socket.channel('push:subtopic', {})
channel.join()
channel.on('ping', (payload) => {
  console.log('ping: ', payload.count);
})
channel.on('play_video', (payload) => {
  render(<App video_id={payload.video_id}/>, mountPoint);
})
channel.on('remove_video', (payload) => {
  render(<App video_id={null}/>, mountPoint);
})

const App = class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.video = this.video.bind(this);
  }

  video() {
    if (this.props.video_id) {
      let src = `http://www.youtube.com/embed/${this.props.video_id}?enablejsapi=1&origin=${location.href}&autoplay=1`
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
          <Col xs={12}>
            {this.video()}
          </Col>
        </Row>
      </div>
    );
  }
};

render(<App video_id={video_id}/>, mountPoint);
