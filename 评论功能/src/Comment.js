import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
  };
  //点击删除评论按钮调用handleDeleteComment方法，该方法调用传入的props.onDeleteComment函数
  //告知上一层组件删除的消息，并把评论下标传出去(?)
  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span> {this.props.comment.username}</span>
        </div>
        <p>{this.props.comment.content}</p>
        <span 
        className='comment-delete' 
        onClick={this.handleDeleteComment.bind(this)}>
          delete
        </span>
      </div>
    )
  }
}

export default Comment