import Image from "next/image"
import notas from '../notas.png'
import '../style/navbar.css'

const Logo = () => {
    return (
        <div className="logo-title">
            <Image
                alt="logo"
                src={notas}
                width={70}
                height={70}
            />
            <h1>Next notes</h1>
        </div>
    )
}

export default Logo