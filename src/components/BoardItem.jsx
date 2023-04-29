import React from 'react'

const BoardItem = (props) => {
    return (
        <div className='w-60'>
            <p>{props.it.text}</p>
        </div>
    )
}

export default BoardItem