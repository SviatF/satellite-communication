import React from "react"
import Router from "next/router"
import {MainLayout} from '../../Components/MainLayout'
import {useState,useEffect} from 'react'

export default function About({data}){


    return <MainLayout title={'About | Satellite'}> 
    <header className='hd-about'>
        
        <h1 style={styles.h}>{data.title}</h1>
        <p style={styles.p}>{data.subtext}</p>
        <p style={styles.p}>Виконавець - Петришин Святослав</p>
        <button style={styles.btn} onClick={()=>{Router.push('/')}}>Повернутись назад</button>
        </header>   
    </MainLayout>
}

const styles={
    h:{
        fontSize:'3vw',
        opacity:'0.9'
    },
    p:{
        fontSize:'1.3vw',
        fontFamily:'cursive',
        opacity:'0.7'
    },
    btn:{
        color:'white',
        background:'black',
        width:'200px',
        height:'40px'
    }

 
}




About.getInitialProps = async ()=>{
    const res = await fetch(`http://localhost:4040/about`);
    const data= await res.json()

    return{
        data
    }
   }
