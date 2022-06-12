import Link from 'next/link'


export default function BgNav({header,items,active,setActive}){



    return(
                <>  
                        <div className='nav-bg-mn-body'>
                            <ul className='nav-bg-mn-body-list' onClick={()=>{setActive(!active)}}>
                                   <li> <Link href={items[0].href}>{items[0].value}</Link></li> 
                                   <li><Link href={items[1].href}>{items[1].value}</Link></li> 
                                   <li> <Link href={items[2].href}>{items[2].value}</Link></li> 
                            </ul>
                        </div>
                        <div className='bg-space-close' onClick={()=>{setActive(!active)}}></div>
                </>
            )
                
}