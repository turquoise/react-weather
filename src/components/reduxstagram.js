import React, { Component } from 'react';
import { connect } from 'react-redux';

class Reduxstagram extends Component {

  renderList() {
    return this.props.reduxPosts.map( (post, index) => {
      return (
        <div key={index} className="list-group-item " >
          <div>
            { post.caption }
          </div>
          <div >
            <img className="image" src={post.display_src} />
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div photo-grid>
        <div className="list-group col-sm-6">
          { this.renderList()}
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  // whatever is return will show up as props.
  return {
    reduxPosts: state.reduxPosts
  };
}

export default connect(mapStateToProps, null)(Reduxstagram);
