import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
import _ from 'lodash';

class PostDetail extends Component {
  componentDidMount() {
    if(!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  renderPostDetail() {
    if(this.props.post !== undefined) {
      return (
        <div>
          <div>{this.props.post.title}</div>
          <div>{this.props.post.categories}</div>
          <div>{this.props.post.content}</div>
        </div>
      );
    }
    return <div>Loading...</div>
  }

  onClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div>
        <h3>Post Detail:</h3>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">Back to Home</Link>
          <button
            onClick={this.onClick.bind(this)}
            className="btn btn-danger">Delete Post
          </button>
        </div>
        <div>
          {this.renderPostDetail()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({postList}, ownProps) {
  return { post: postList[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDetail);
