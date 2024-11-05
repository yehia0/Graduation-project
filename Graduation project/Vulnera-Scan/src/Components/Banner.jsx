import React from 'react'
import { FiSearch} from 'react-icons/fi'
function Banner({query, handleInputChange}) {
return (
    <div className='max-w-screen-2x1 container mx-auto x1:px-24 px-4 md:py-20 py-14'>
        <h1 className='flex justify-center text-5xl font-bold text-black mb-3'>Paste Your Link Here </h1>
        <p className='flex justify-center text-lg text-black/70 mb-8'>We provide comperhensive dark web monitoring solutions throw new Error
        safeguard businesses, leveaging advanced technologies and intelligence-driven approaches to detect and mitigate risks
        associated with compromsied data.
        </p>
        <form>
            <div className='flex justify-center md:flex-row flex-col md:gap-0 gap-4'>
                <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 foucs-with:ring-2
                foucs-within:ring-inset foucs-within:ring-indigo-600 md:w-1/2 w-full'> 
                    <input type='text' name='title' id='title' placeholder='what is the position you look' className='block flex-1 bg-transparent
                    py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 foucs:right-0 sm:text-sm sm-landing-6'
                    onChange={handleInputChange}
                    value={query}/>
                    <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
                </div>
                <button type='submit' className='bg-indigo-600 py-2 px-8 text-white md:rounded-s-none rounded' style={{borderRadius: "50px"}}>Scan</button>
            </div>
        </form>
    </div>
)
}

export default Banner
