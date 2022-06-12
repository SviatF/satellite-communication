import Head from 'next/head'
import React from 'react'
import Router from "next/router"
import {MainLayout} from '../Components/MainLayout'
import Link from "next/link";
import PostServices from '../Components/Posts/PostServices';
import PostNew from '../Components/Posts/PostNew';
import PostDevices from '../Components/Posts/PostDevices';

export default function Index({categoryFetch , newsFetch,Fetchall}){

    return (
<MainLayout title={'Main | Satellite'}>
    <Head>
        <meta charSet="utf-8"/>
        <meta name="keywords" content="satellite, communication, nasa" />
        <meta name="description" content="textetxetxtetxetxtetxtetxetxet" />
    </Head>
         <header className={'hd-100vh'}>
              <div className={'hd-row'}>
                 <h1>Satellite | Communication</h1>
                 <h2>Сайт про супутникові зв&apos;язки</h2>
              </div>
         </header>

        <section id='news' className='sec-bk'>
                <div id='w90'>
                    <h3>Новини</h3>
                    <div className='index-sec-news'>
                    {newsFetch.filter((val)=>{

                            if(val.id>4){return false;}
                            else{return val;}

                        }).map(post=>(
                            <PostNew key ={post.id}props={post}/>
                     ))}
                    </div>
                    <div className='btn-pd'><a onClick={()=>{Router.push('/news/')}} className='btn btn-5 btn-wh'>більше новин</a> </div>
                </div>
        </section>
        <section id='services' className='sec-wh'>
        <div id='w90'>
                <h3 className='sec-serv-h'>Типи супутникових служб</h3>
                <div className='index-sec-services'>
                    {categoryFetch.filter((val)=>{

                        if(val.id>3){return false;}
                        else{return val;}

                    }).map(post=>(
                    <PostServices key ={post.id}props={post}/>

                    ))}
                    
                    </div>
                    <div className='btn-pd'><a onClick={()=>{Router.push('/posts/')}} className='btn btn-5'>читати далі</a> </div>
                </div>
        </section>
        <section id='mixServ' className='sec-bk'>
        <div id='w90'>
                <h3>Пристрої супутникового зв&apos;язку</h3>
                    <div className='index-sec-news'>
                    {Fetchall.filter((val)=>{

                            if(val.id>4){return false;}
                            else{return val;}

                    }).map(post=>(

                        <PostDevices key ={post.id}props={post}/>

                ))}
                   
                    </div>
                    <div className='btn-pd'><a onClick={()=>{Router.push('/posts/')}} className='btn btn-5 btn-wh'>більше пристроїв</a> </div>
                </div>
        </section>
    </MainLayout>
    )
}
Index.getInitialProps = async ()=>{
    const resCategory = await fetch(`http://localhost:4040/category`);
    const categoryFetch= await resCategory.json()
    const resNews = await fetch(`http://localhost:4040/news`);
    const newsFetch= await resNews.json()
    const resall = await fetch(`http://localhost:4040/allItems`);
    const Fetchall= await resall.json()
    return({categoryFetch,newsFetch,Fetchall})
        
}