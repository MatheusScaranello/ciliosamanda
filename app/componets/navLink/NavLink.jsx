import style from './navLink.module.css'
import Link from 'next/link'

const NavLink = ({rota, texto}) =>  {
    return (
        <div className={style.div}>
            <Link className={style.navLink} href={rota}>{texto}</Link>
        </div>
    );
}

export default NavLink