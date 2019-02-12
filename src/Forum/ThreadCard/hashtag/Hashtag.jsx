import React from 'react'
import PropTypes from 'prop-types'
import './Hashtag.scss'

const Hashtag = (
  children,
) => (
    <div className="hashtag">
      {children.children}
    </div>
  )

Hashtag.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Hashtag
