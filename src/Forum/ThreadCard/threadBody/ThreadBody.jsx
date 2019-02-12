import React from 'react'
import PropTypes from 'prop-types'
import './ThreadBody.scss'
import moment from 'moment'
const ThreadBody = ({
  question,
  time,
  description,
  hasTime,
}) => (
    <div className="thread-body">
      <span className="question">
        {question}
      </span>
      {hasTime
        && <span className="time">. Asked {moment(time).fromNow()}</span>
      }
      <p>{description}</p>
    </div>
  )
ThreadBody.propTypes = {
  question: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasTime: PropTypes.bool.isRequired,
}

export default ThreadBody
