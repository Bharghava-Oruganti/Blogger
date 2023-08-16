import React, { Component,Fragment } from 'react'


// Components
import Blogs from '../blog_list/Blogs'
import Picks from '../recommendation/Picks'

class Body extends Component {
  render() {
    return (
        <Fragment>
            <Blogs />
            <br />
            <Picks />
       </Fragment>
    )
  }
}

export default Body
