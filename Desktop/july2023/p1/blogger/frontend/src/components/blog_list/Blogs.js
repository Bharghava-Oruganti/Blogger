import React, { Component } from 'react'

// Connect 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBlogs,deleteAllBlogs } from '../../actions/blog_actions';

class Blogs extends Component {

    static propTypes = {
        blogs: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getBlogs();
    }
  render() {
    return (
      <div>
          <button className="btn btn-primary"  >Delete All</button> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
    blogs : state.blogsReducer.blogs
})

export default connect(mapStateToProps,{getBlogs})(Blogs);