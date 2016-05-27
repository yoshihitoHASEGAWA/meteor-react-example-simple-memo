import React from 'react';
import MemoItem from './MemoItem';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 200,
};

export default class MemoList extends React.Component {
  render() {
    const { memos, removeMemo, updateMemoContent } = this.props;
    return (
      <div className="memo-list">
        <Masonry options={masonryOptions}>
          {memos.map(memo => (
            <MemoItem
              key={memo._id}
              memo={memo}
              removeMemo={removeMemo}
              updateMemoContent={updateMemoContent}
            />
          ))}
        </Masonry>
      </div>
    );
  }
}

MemoList.propTypes = {
  memos: React.PropTypes.array.isRequired,
  removeMemo: React.PropTypes.func.isRequired,
  updateMemoContent: React.PropTypes.func.isRequired,
};