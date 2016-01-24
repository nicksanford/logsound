'use strict'

import Howler from 'howler';
import _ from 'lodash';

const events = `candidate_accept_invite
candidate_decline_intite
candidate_receive_feedback
candidate_shortlisted
candidate_sorted_to_no
candidate_submitted
employer_sign_up
job_cast_accepted
job_cast_rejected
match_created_pull
match_created_push
question_answered
question_asked
recruiter_sign_up`.split('\n');

const soundNames = `another-one.mp3
beatking_holdup.mp3
claves.mp3
conga2.mp3
conga4.mp3
cowbell.mp3
crash2.mp3
drake-ugh.mp3
drake-yeauh.mp3
guitar-palm-1.mp3
guitar-palm-2.mp3
guitar-palm-3.mp3
guitar-palm-4.mp3
guitar-palm-5.mp3
gunshot3.mp3
hat-1.mp3
hat.mp3
hay.mp3
jersey-ha.mp3
jyea.mp3
keys1.mp3
keys2.mp3
keys3.mp3
keys4.mp3
keys5.mp3
keys6.mp3
metronome-up.mp3
metronome.mp3
normal3.mp3
punchy-trap.mp3
ross-huh.mp3
ross-maybach.mp3
smooth5.mp3
snap.mp3
snare-huge-reverb.mp3
snare-rim-real.mp3
stick.mp3
tom.mp3
tom2.mp3
trap-snare-dry.mp3
triangle.mp3
ugh.mp3
yeahbaby.mp3`.split('\n');

const sounds = soundNames.map(soundName => new Howler.Howl({urls: [`/js/sounds/${soundName}`]}));

const soundFunctions = sounds.map(sound => (payload => sound.play()));

const soundEvents = _.zipObject(events, soundFunctions);

export default soundEvents
