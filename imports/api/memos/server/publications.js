import { Meteor } from 'meteor/meteor';
import { Memos } from '../memos.js';

Meteor.publish('memos.all', function memosAll() {
  return Memos.find({});
});