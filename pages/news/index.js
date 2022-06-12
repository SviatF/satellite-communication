import React, { memo, useState, useEffect } from 'react';
import Router from "next/router"
import Head from 'next/head'
import {MainLayout} from '../../Components/MainLayout'
import PostNew from '../../Components/Posts/PostNew';

export default function News({newsFetch}){
    const [searchTerm,setSearchTerm]=useState("");



    return <MainLayout title={'News | Satellite'}>

<section className='sec-bc-hd'>
    <div style={styles.submain}>    
     <div style={styles.headSerc}>
         <h3 style={styles.h1}>Новини</h3>
         <input style={styles.input} type="text"
                    placeholder="Пошук..."
                    onChange={(event)=>{
                        setSearchTerm(event.target.value);
                    }}/>
                    </div>
            <hr style={styles.hr}></hr>
        <div style={styles.subnewCatalog}>
       <div style={styles.newCatalog}>
                
            {newsFetch.filter((val)=>{
                    if(searchTerm==""){
                        return val
                    }else if(val.someText.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((props)=><PostNew props={props} key={props.id}/>
            
            )}

        </div>
        </div>
        </div>
    </section>
   </MainLayout>
}

const styles={
    submain:{
        width:'80%',
        minWidth:'300px',
        height:'auto',
        backgroundColor:'#111',
        margin:'0px auto'
    }
    ,
    headSerc:{
        width:'94%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        alignItems:'center',
        margin:'0px auto'
    },
    h1:{
        color:'#fff',
        fontSize:'35px'
    },
    input:{
        width:'300px',
        height:'35px',
        backgroundColor:'black',
        color:'white',
        border:'none',
        borderRadius:'20px',
        boxSizing: 'border-box',
        paddingLeft:'20px'
    },
    hr:{
        opacity:'0.5',
        margin:'0'
    },
    
    newCatalog:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'flex-start',
        width:'100%',
        minHeight:'100vh'
        
       
     },
     subnewCatalog:{
        background:'#050505',
        padding:'2vw 0 2vw 0',
        margin:'0px auto',
        marginLeft:' auto',
    marginRight: 'auto'
     }

};




News.getInitialProps=async()=>{
    const resNews = await fetch(`http://localhost:4040/news`);
    const newsFetch= await resNews.json()

    return({newsFetch})
}