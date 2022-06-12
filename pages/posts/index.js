import React from "react"
import {useState,useEffect} from 'react'
import Router from "next/router"
import {MainLayout} from '../../Components/MainLayout'
import Link from "next/link";
import PostDevices from "../../Components/Posts/PostDevices";



export default function Posts({postsct,postfss,postrss,postmss}){
  


   
    
    

    return (<MainLayout title={'Services | Satellite'}>
        
            <section className='sec-bc-hd'>
                <div style={styles.submain}>
                    <div style={styles.headSerc}>
                        <h3 style={styles.h3}>{postsct[0].nameMain}</h3>
                            <div style={styles.subp}>
                                <p align='justify' style={styles.p}>{postsct[0].someText}</p>
                            </div>
                    </div>
                   
                    <hr style={styles.hr}></hr>
                    <div style={styles.newCatalog}>
                             {postmss.filter((val)=>{
                                
                                if(val.id>2){return false;}
                                else{return val;}

                                 }).map((post)=>(

                                <PostDevices props={post} key={post.id}/>


                            ))}
                    </div>
                </div>

                <div style={styles.submain}>
                    <div style={styles.headSerc}>
                        <h3 style={styles.h3}>{postsct[1].nameMain}</h3>
                            <div style={styles.subp}>
                                <p align='justify' style={styles.p}>{postsct[1].someText}</p>
                            </div>
                    </div>
                   
                    <hr style={styles.hr}></hr>
                    <div style={styles.newCatalog}>
                        {postmss.filter((val)=>{
                                
                                if(val.id<3 || val.id>4){return false;}
                                else{return val;}

                            }).map((post)=>(

                                <PostDevices props={post} key={post.id}/>


                            ))}
                    </div>
                </div>

                <div style={styles.submain}>
                    <div style={styles.headSerc}>
                        <h3 style={styles.h3}>{postsct[2].nameMain}</h3>
                            <div style={styles.subp}>
                                <p align='justify' style={styles.p}>{postsct[2].someText}</p>
                            </div>
                    </div>
                   
                    <hr style={styles.hr}></hr>
                    <div style={styles.newCatalog}>
                            {postmss.filter((val)=>{
                                
                                if(val.id<5){return false;}
                                else{return val;}

                            }).map((post)=>(

                                <PostDevices props={post} key={post.id}/>


                            ))}
                    </div>
                </div>
            </section>

   </MainLayout>);

 
}
//<React.Fragment></React.Fragment>

const styles={
    mainSec:{
        background:'url(/../header.jpg) no-repeat fixed',
        backgroundSize:'100%',
        height:'auto',
        
    },
    submain:{
        width:'80%',
        height:'auto',
        backgroundColor:'#111',
        margin:'0px auto'
    }
    ,
    headSerc:{
        width:'94%',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        margin:'0px auto'
    },
    h3:{
        color:'#fff',
        fontSize:'30px',
        margin:'1vw 0',
        fontFamily:'Comfortaa'
    },
    subp:{
        height:'75px',
        overflow:'hidden',
        margin:'0 0 1vw 0'
    }
    ,
    p:{
        color:'#fff',
        fontSize:'14px',
        opacity:'0.8',
        fontFamily:'Comfortaa'
    },
    hr:{
        opacity:'0.5',
        margin:'0'
    },
    
    newCatalog:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
        margin:'0 auto',
        background:'#050505',
        padding:'2vw 2vw '
     },

};




Posts.getInitialProps = async ()=>{
    const resct = await fetch(`http://localhost:4040/category`);
    const postsct = await resct.json()
    const resmss = await fetch(`http://localhost:4040/allItems`);
    const postmss = await resmss.json()
    //const resrss = await fetch(`http://localhost:4040/rssItems`);
   // const postrss = await resrss.json()
   // const resfss = await fetch(`http://localhost:4040/fssItems`);
   // const postfss = await resfss.json()
    return{postsct,postmss}
   }