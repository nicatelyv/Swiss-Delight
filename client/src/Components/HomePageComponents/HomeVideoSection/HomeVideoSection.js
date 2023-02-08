import React from 'react'
import ReactPlayer from 'react-player'
import './style.scss'

function HomeVideoSection() {
    return (
        <section className='videoSection'>
            <ReactPlayer width='90%' height='90vh' url='https://www.youtube.com/watch?v=R2524Sasm3I'></ReactPlayer>
        </section>
    )
}

export default HomeVideoSection