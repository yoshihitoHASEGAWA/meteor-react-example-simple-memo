import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Memos } from './memos';

Meteor.methods({
  'Memos.insert'(content) {
    new SimpleSchema({
      content: { type: String }
    }).validate({ content });

    this.unblock();

    Memos.insert({content});
  },

  'Memos.update'(memoId, content) {
    new SimpleSchema({
      memoId: { type: String },
      content: { type: String }
    }).validate({ memoId, content });

    this.unblock();

    Memos.update({_id: memoId}, {$set: {content}});
  },

  'Memos.remove'(memoId) {
    new SimpleSchema({
      memoId: { type: String }
    }).validate({ memoId });

    this.unblock();

    Memos.remove(memoId);
  }
});