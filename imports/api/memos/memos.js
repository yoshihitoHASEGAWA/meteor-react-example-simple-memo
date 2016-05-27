import { Mongo } from 'meteor/mongo';

class MemosCollection extends Mongo.Collection {
  insert(doc, callback) {
    doc.createdAt = doc.createdAt || new Date();
    const result = super.insert(doc, callback);
    return result;
  }
}

export const Memos = new MemosCollection('Memos');

Memos.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

// for debug
if (Meteor.isDevelopment) {
  global.collections = global.collections || {};
  global.collections.Memos = Memos;
}