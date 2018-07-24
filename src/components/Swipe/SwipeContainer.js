import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Swipe from './Swipe'
import {likeUser, dislikeUser} from '../../actions/swipe'

class SwipeContainer extends PureComponent {
  render() {
    return (
      <div>
       {!this.props && 'Loading'}
       
        <Swipe likeUser={this.props.likeUser} dislikeUser={this.props.dislikeUser} users={this.props.users}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps,{likeUser, dislikeUser})(SwipeContainer)
