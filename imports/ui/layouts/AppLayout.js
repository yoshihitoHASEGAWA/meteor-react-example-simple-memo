import React from 'react';
import Header from '../components/Header';
import MemoList from '../components/MemoList';

export default class AppLayout extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { memos, createMemo } = this.props;
    createMemo(`New memo ${memos.length + 1}`);
  }

  render() {
    const { memos, removeMemo, updateMemoContent, loading } = this.props;
    if (loading) {
      return this.renderLoading();
    }
    return (
      <div className="container">
        <Header />
        <button className="add-button" onClick={this.onClick}>Add</button>
        <MemoList
          memos={memos}
          removeMemo={removeMemo}
          updateMemoContent={updateMemoContent}
        />
      </div>
    );
  }

  renderLoading() {
    return (
      <div className="container">
        <div className="loading">Now Loading...</div>
      </div>
    );
  }
}

AppLayout.propTypes = {
  loading: React.PropTypes.bool,
  memos: React.PropTypes.array.isRequired,
  createMemo: React.PropTypes.func.isRequired,
  removeMemo: React.PropTypes.func.isRequired,
  updateMemoContent: React.PropTypes.func.isRequired,
};
