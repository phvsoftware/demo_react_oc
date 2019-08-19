import PropTypes from 'prop-types'
import React from 'react'

import './GuessCount.css'

const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.propType = {
    guesses: PropTypes.number.isRequired, 
}

export default GuessCount