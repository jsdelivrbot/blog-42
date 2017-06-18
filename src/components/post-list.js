import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPostList() {
    if(this.props.posts) {
      return _.map(this.props.posts, post => {
        return (
          <Link
            to={ "/posts/"+ post.id }
            className="list-group-item"
            key={post.id}>
              {post.title}
          </Link>);
      });
    }
    else {
      return <div>Loading...</div>
    }
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <div id="add-post">
          <Link className="btn btn-primary" to="/posts/new">Add a new post</Link>
        </div>
        <ul className="list-group">
          {this.renderPostList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.postList };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
