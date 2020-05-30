import React from 'react';
import {Typography} from '@material-ui/core';
import './Progress.css'

const Progress = ({attemps,guessList}) => {
    return(
        <div>
            <Typography className="progressBar" variant="h4">Guess # {attemps}</Typography>
            <ul className="progressBar_history">
                {guessList}
            </ul>
        </div>
    )
}

export default Progress;