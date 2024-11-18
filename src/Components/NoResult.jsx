
import React from 'react'

const NoResult = () => {
    return (
        <div className='flex flex-col items-center mt-6'>
            <img src="icons/no-result.svg" alt="No results found" />
            <h3 className='my-4 font-bold tracking-wider text-center text-white'>Something went wrong</h3>
            <p className='text-sm font-light text-center text-white'>We&apos;re unsable to retrieve the weather details. Ensure you&apos;ve entered a valid city or try again later.</p>
        </div>
    )
}

export default NoResult