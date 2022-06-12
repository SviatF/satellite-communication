import Link from 'next/link'
import { useState } from 'react'
import BgNav from './bg-nav'

export default function Navbar({header,items}){
    const [menuActive,setMenuActive] = useState(false)


    return(
        <nav>
                <div className='nav-mn'>
                    <Link className={'logo'} href={header.href}><a style={styles.lg}>{header.value}</a></Link>
                    <Link href={items[0].href}>{items[0].value}</Link>
                    <Link href={items[1].href}>{items[1].value}</Link>
                    <Link href={items[2].href}>{items[2].value}</Link>
                    </div>
                <div className={menuActive ? 'nav-bg-mn bg-active':'nav-bg-mn'}>
                    <div className='nav-bg-mn-head'  >
                            <Link className={'logo'} href={header.href}><p style={styles.lgbg}>{header.value}</p></Link>
                            <p className='nav-bg-btn' onClick={()=>{setMenuActive(!menuActive)}}><span className='bg-menu-lines'></span></p>
                        </div>
                        <BgNav active={menuActive} setActive={setMenuActive} header={header} items={items}/>
                </div>
                   
                </nav>
            )
                
}
const styles={
    lgbg:{
        marginLeft:'5vw',
        fontSize:'20px',
        transform:'rotate(90deg)',
        fontWeight:'1000'
    }
    ,
    lg:{
        fontSize:'25px',
        transform:'rotate(90deg)',
        fontWeight:'bold'
    }
}