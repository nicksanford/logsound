'use strict'

import socket from './socket';
import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import soundEvents from './soundEvents';
import App from './app';

const mountPoint = document.getElementById('react');

const videoEvents = {
  play_video: payload => render(<App video_id={payload.video_id}/>, mountPoint),
  remove_video: payload => render(<App video_id={null}/>, mountPoint)
};

const heartBeatEvents = {
  ping: payload => console.log('ping: ', payload.count)
};

const channelEvents = _.merge(soundEvents, videoEvents, heartBeatEvents);


socket.connect();

let channel = socket.channel('push:subtopic', {});

channel.join();

_.zipWith(_.keys(channelEvents), _.values(channelEvents), (eventName, callback) =>
  channel.on(eventName, callback)
);

render(<App video_id={null}/>, mountPoint);
