'use client'

import '../style/principal.css'
import Menu from './menu'
import Features from './features'
import { useState } from 'react'

const Principal = () => {

    const [notes, setNotes] = useState([])
    const [activeMenuItem, setActiveMenuItem] = useState('')

    const handleNotesClick = async(menuItem) => {
        setActiveMenuItem(menuItem)

        if(menuItem === 'Notes'){
            try{
                const response = await fetch('https://jobicy.com/api/v2/remote-jobs', {
                    //headers: {Authorization: 'NjUzNzg0ODQ5NTI1NjM3MTIw.MTcwOTI2MzIzOQ--.d1058da0c1f3'}
                })
                if(!response.ok){
                    throw new Error('Failed to fetch data')
                }
                const data = await response.json()
                const todos = data.jobs.slice(0, 5)
                setNotes(todos)
            }
            catch(e){
                console.log('Error: ', e.message)
            }
        }
    }

    return (
        <div className="prin-home">
            <div className='home'>
                <Menu handleNotesClick={handleNotesClick} />
                <Features notes={notes} />
            </div>
        </div>
    )
}

export default Principal