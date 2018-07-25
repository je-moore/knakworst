import './styles/NavComponent.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import React, { PureComponent } from 'react'

class NavComponent extends PureComponent {
  render() {
    return (
      <div id={'NavComponent'}>
        <Link to={`/profile/${this.props.currentUser}`} className={'NavComponent-Link'}>
          <div id={'NavComponent-Profile'}>
            <FontAwesomeIcon icon="user-circle" size="3x" />
          </div>
        </Link>
        <Link to={'/swipe'} className={'NavComponent-Link'}>
          <div id={'NavComponent-Swipe'}>
            <FontAwesomeIcon icon="music" size="3x" />
          </div>
        </Link>
        <Link to={'/matches'} className={'NavComponent-Link'}>
          <div id={'NavComponent-Matches'}>
            <FontAwesomeIcon icon="comment" size="3x" />
          </div>
        </Link>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps)(NavComponent)
