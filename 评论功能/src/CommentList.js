import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }

  //用户点击删除按钮的时候，comment组件调用props.onDeleteComment函数
  //也就是调用handleDeleteComment方法
  //该方法调用传入的props.onDeleteComment函数，并传出评论下标(?)
  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }
  render () {
    return (
      <div>
        {this.props.comments.map((comment,i) => 
          <Comment 
          comment={comment} 
          key={i} 
          index={i}
          onDeleteComment={this.handleDeleteComment.bind(this)}/>
          )}
      </div>
    )
  }
}

export default CommentList