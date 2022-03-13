import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor () {
        super();
        this.state = {
            comments: []
        }
    }
    componentWillUnmount() {
        this._loadComments();
    }
    handleSubmitComment(comment){
        if(!comment) 
            return;
        else if(!comment.username) 
            return alert('用户名不能为空');
        else if(!comment.content) 
            return alert('评论内容不能为空');
        else{
            const comments = this.state.comments;
            comments.push(comment);
            this.setState({
                comments:comments
            });
            this._saveComments(comments);
        }
    }
    handleDeleteComment(index) {
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({
            comments:comments
        });
        this._saveComments(comments);
    }

    _loadComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
          comments = JSON.parse(comments)
          this.setState({ comments })
        }
      }
    _saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput 
                    onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList 
                comments = {this.state.comments}
                onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

export default CommentApp;