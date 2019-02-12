import React from 'react'
import PropTypes from 'prop-types'
import './ThreadHeader.scss'

const ThreadHeader = ({
  numberLikes,
}) => (
    <div className="thread-header">
      <span>
        <i className="far fa-thumbs-up fa-2x" />
        <div>({numberLikes})</div>
      </span>

    </div>
  )

ThreadHeader.propTypes = {
  numberLikes: PropTypes.number.isRequired,
}

export default ThreadHeader
