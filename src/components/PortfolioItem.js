import React from 'react'

const PortfolioItem = ({title, description, background}) => {
    return (
        <div className='PortfolioItem' style={{background: background}}>
            <div className='PortfolioItem__textBox'>
                <h1>{title}</h1>
                <h1>{description}</h1>
            </div>
        </div>
    )
}

export default PortfolioItem
