import Head from 'next/head'
import Footer from './footer'
import Navbar from './navbar'


export function MainLayout({Fetchall,children,title="Bla Bla PROPS"}){
    const navItems = [{value:"S",href:"/"},{value:"Новини",href:"/news"},{value:"Служби",href:"/posts"},{value:"Про нас",href:"/about"},]





    return(
        <>
                 <Head>                     <title>{title}</title>
            </Head>
                <Navbar header={navItems[0]} items={[navItems[1],navItems[2],navItems[3]]}/>
                <main>
                    {children}
                </main>
                    <Footer/>
                <style jsx>{`
                    
                
                    main{
                        margin-top:60px;
                        min-height:100vh;
                    }
                   
                `}</style>
        </>
    )



}

MainLayout.getInitialProps = async ()=>{
    const resall = await fetch(`http://localhost:4040/recent`);
    const Fetchall= await resall.json()
    return({Fetchall})
        
}