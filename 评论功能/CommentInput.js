import React from "react";
import { Component } from "react";

class CommentInput extends Component {
    constructor(){
        super()
        this.state = {
            usename:'',
            content:''
        }
    }
    //使用event.target.value获取用户输入的用户名
    //通过setState把它设置到state.name中，这时候组件的内容就会更新，input的value值就会显示到输入框
    handleUsernameChange(event){
        this.setState({
            usename:event.target.value
        })
    }
    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    //handleSubmit方法判断props中是否传入了onSubmit属性，有的话调用该函数
    //并把用户输入的用户名的评论数据传入该函数
    //然后再通过setState清空用户输入的评论内容
    handleSubmit() {
        if(this.props.onSubmit){
            const {usename,content} = this.state;
            this.props.onSubmit({usename,content});
        }
        this.setState({content:''});
    }
    render(){
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <span className = "comment-field-name">用户名:</span>
                    <div className="comment-field-input">
                        <input 
                        placeholder="输入姓名!" 
                        value={this.state.usename}
                        onChange={this.handleUsernameChange.bind(this)}
                        >
                        </input>
                    </div>
                </div>
                <div className="comment-field">
                    <span className = "comment-field-name">评论:</span>
                    <div className="comment-field-input">
                        <textarea 
                        placeholder="输入评论!" 
                        value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button
                    onClick={this.handleSubmit.bind(this)}
                    >发布
                    </button>
                </div>
            </div>
        );
    }
}

export default CommentInput;