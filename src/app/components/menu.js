import '../style/menu.css'

const Menu = ({ handleNotesClick }) => {

    return (
        <div className="menu">
            <div className='features'>
                <button 
                    type='button' 
                    className='btn btn-primary btn-lg'
                    onClick={() => console.log('agregar nueva feature')}
                > 
                    Add new feature 
                </button>
                <li> Task </li>
                <li onClick={() => handleNotesClick('Notes')} key="notes"> Notes </li>
                <li> Reminder </li>
                <li> Events </li>
            </div>
            <div className='settings'>
                <li>Settings</li>
                <li>Categories</li>
            </div>
        </div>
    )
}

export default Menu