import { Meteor } from 'meteor/meteor';
import { Memos } from '../imports/api/memos/memos';
import '../imports/api/memos/methods';
import '../imports/api/memos/server/publications';

Meteor.startup(() => {
  if (Memos.find().count() === 0) {
    const data = [
      {content: 'Memo 1'},
      {content: 'Memo 2'},
      {content: 'Memo 3'},
      {content: 'Memo 4'},
      {content: 'Memo 5'},
    ];
    data.forEach(memo => Memos.insert(memo));
  }
});