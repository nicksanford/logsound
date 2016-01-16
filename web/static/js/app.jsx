//import 'phoenix_html'
import 'bootstrap-webpack';
import { Socket } from './phoenix';
//import socket from './socket';
import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import Howler from 'howler';
let socket = new Socket('/socket', {
  params: {token: window.userToken},
  logger: (kind, msg, data) => {
    console.log(`${kind}: ${msg}`, data)
  }
})

let video_id = null;
let mountPoint = document.getElementById('react');
let pong = new Howler.Howl({urls: ['http://www.javascriptoo.com/application/html/pong.wav']})

const channelEvents = {
  candidate_accept_invite: (payload) => { pong.play() },
  candidate_decline_intite: (payload) => { pong.play() },
  candidate_receive_feedback: (payload) => { pong.play() },
  candidate_shortlisted: (payload) => { pong.play() },
  candidate_sorted_to_no: (payload) => { pong.play() },
  candidate_submitted: (payload) => { pong.play() },
  employer_sign_up: (payload) => { pong.play() },
  job_cast_accepted: (payload) => { pong.play() },
  job_cast_rejected: (payload) => { pong.play() },
  match_created_pull: (payload) => { pong.play() },
  match_created_push: (payload) => { pong.play() },
  ping: (payload) => { console.log('ping: ', payload.count) },
  play_video: (payload) => { render(<App video_id={payload.video_id}/>, mountPoint) },
  question_answered: (payload) => { pong.play() },
  question_asked: (payload) => { pong.play() },
  recruiter_sign_up: (payload) => { pong.play() },
  remove_video: (payload) => { render(<App video_id={null}/>, mountPoint) },
}

const App = class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.video = this.video.bind(this);
  }

  video() {
    if (this.props.video_id) {
      let src = `http://www.youtube.com/embed/${this.props.video_id}?enablejsapi=1&origin=${location.href}&autoplay=1&rel=0`;
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

socket.connect();
let channel = socket.channel('push:subtopic', {});
channel.join();
_.zipWith(_.keys(channelEvents), _.values(channelEvents), (eventName, callback) => {
  channel.on(eventName, callback)
})

render(<App video_id={video_id}/>, mountPoint);
