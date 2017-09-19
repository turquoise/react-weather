import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../actions';


class Single extends Component {

  componentDidMount() {
    // provided by react router.
    const id = this.props.match.params.id;
    console.log('id ', id);
    this.props.getPost(id);
  }

  render() {
    //posts[this.props.match.params.id]; // the post we want to show.
    const { mypost } = this.props;
    if (!mypost) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link className="btn btn-primary" to="/photogrid">Back To Index</Link>
        <h3>{mypost.caption}</h3>
        <h6>Likes: {mypost.likes}</h6>
        <img className="image" src={mypost.display_src} alt={mypost.caption} />
      </div>
    );
  }
}

function mapStateToProps({ myposts }, ownProps) {
  //return { myposts };
  return { mypost: myposts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { getPost })(Single);
