import '../style/menu.css'

const Menu = () => {
    return (
        <div className="menu">
            <div className='features'>
                <button> Add new feature </button>
                <li>Task</li>
                <li>Notes</li>
                <li>Reminder</li>
                <li>Events</li>
            </div>
            <div className='settings'>
                <li>Settings</li>
                <li>Categories</li>
            </div>
        </div>
    )
}

export default Menu