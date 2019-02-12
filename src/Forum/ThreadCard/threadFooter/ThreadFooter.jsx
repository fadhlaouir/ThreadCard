import React from 'react'
import PropTypes from 'prop-types'
import './ThreadFooter.scss'
import HashTag from '../hashtag'
const ThreadFooter = ({
  comments,
  tagNames,
  hasTags,
}) => {
  console.log("the tagnames are: ", tagNames)
  return tagNames ? (
    <div className="thread-footer">
      <div className="space">
        <div className="comments">
          <i className="material-icons"> comment</i>
          <span style={{ paddingLeft: '5px' }}>({comments})  </span>
        </div>
        {hasTags && (
          <div className="btn">
            {tagNames.map((el, index) => (
              <div key={index} className="button">
                <HashTag>{el}</HashTag>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  ) : <div />
}

ThreadFooter.propTypes = {
  comments: PropTypes.number.isRequired,
  tagNames: PropTypes.string.isRequired,
  hasTags: PropTypes.bool.isRequired,
}

export default ThreadFooter
