import '../style/features.css'

const Features = ({ notes }) => {

    console.log(notes)
    //console.log(<p>{note.jobDescription}</p>)
                    /*<div className='complet'>
                        <h5>{note.pubDate}</h5>
                        <h1>{note.jobTitle}</h1>
                    </div>*/

    const truncateText = (text, maxLength) => {
        if(text.length > maxLength) {
            return text.slice(0, maxLength)
        }
        return text
    }

    const showDetails = (id) => {
        console.log(id)
        const note = notes.filter((x) => {
            if(x.id === id){
                return { notes: note }
            }else{
                console.log('no existe ', id)
            }
            return note
        })
    }
    

    return (
        <div className='home-features'>
            {notes.map((note) => {
                return (
                    <div key={note.id} className='intro' onClick={() => console.log('show details', note.id)}>
                        <h4> {truncateText(note.jobTitle, 15)} </h4>
                        <p> {note.jobLevel} </p>
                    </div>
                )
            })}
            
        </div>
    )

}

export default Features