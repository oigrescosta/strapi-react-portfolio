import React from 'react'

const PortfolioItem = ({title, description}) => {
    return (
        <div className='PortfolioItem'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default PortfolioItem
