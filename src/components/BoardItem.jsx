import React from 'react'
import CardItem from './CardItem'


const BoardItem = (props) => {
    return (
        <div className='w-64 rounded-full'>
            
            <div className='py-1'>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>
        </div>
    )
}

export default BoardItem