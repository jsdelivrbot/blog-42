import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import { connect } from 'react-redux';

class PostCreate extends Component {
  renderField(field) {
    return (
      <div className={(field.meta.touched && field.meta.error) ? "form-group has-danger" : "form-group" }>
        <label htmlFor={field.name}>{field.label}</label>
        <input className="form-control" {...field.input} />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );

  }
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Categories" name="categories" component={this.renderField} />
        <Field label="Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
    const errors = {};
    if(!values.title) {
        errors.title = "Please, enter a title";
    }
    if(!values.categories) {
        errors.categories = "Please, enter a category";
    }
    if(!values.content) {
        errors.content = "Please, enter post content";
    }
    return errors
}

function mapStateToProps(state) {
    return {posts: state.postList};
}

export default reduxForm({
  'form': 'PostCreateForm',
  validate
})(
  connect(mapStateToProps, { createPost })(PostCreate)
);
