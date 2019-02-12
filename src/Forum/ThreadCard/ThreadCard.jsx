import React from 'react'
import PropTypes from 'prop-types'
import './ThreadCard.scss'
import { Grid, Cell } from 'react-md';
import ThreadHeader from './threadHeader'
import ThreadBody from './threadBody'
import ThreadFooter from './threadFooter'

const ThreadCard = ({
  comments,
  question,
  time,
  description,
  hasFooter,
  tagNames,
  hasTags,
  hasTime,
  hasHead,
  numberLikes,
}) => (
    <Grid className="thread-card">
      {hasHead
        && (
          <Cell size={1} style={{ margin: '0px' }}>
            <ThreadHeader
              numberLikes={numberLikes}
              hasHead={hasHead}
            />
          </Cell>
        )}
      <Cell size={hasHead ? 11 : 12} className="thread-content">
        <div className="body">
          <ThreadBody
            question={question}
            time={time}
            hasTime={hasTime}
            description={description}
          />
        </div>

        {hasFooter && (
          <div className="footer">
            <ThreadFooter
              comments={comments}
              tagNames={tagNames}
              hasTags={hasTags}
            />
          </div>
        )}

      </Cell>
    </Grid>
  );

ThreadCard.propTypes = {

  question: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tagNames: PropTypes.string.isRequired,
  numberLikes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  hasFooter: PropTypes.bool,
  hasTags: PropTypes.bool,
  hasTime: PropTypes.bool,
  hasHead: PropTypes.bool,

};

ThreadCard.defaultProps = {
  hasFooter: true,
  hasTags: true,
  hasTime: true,
  hasHead: true,

};
export default ThreadCard
