import React from "react";
import Link from "next/link";

const PostDevices= (props)=>{
    console.log(props)
    return(
        <Link href={`/posts/devices/[deviceid]`} as={`/posts/devices/${props.props.id}`}>
        <div key={props.props.id} className='index-sec-news-body'>
            <img height={'175px'} className='index-sec-news-body-img' src={props.props.photo}></img>
                 <h4  style={styles.h}>{props.props.nameMain}</h4>
            <p className='index-sec-news-body-p' align=' justify '>{props.props.someText}</p>
               
        </div>
        </Link>
    )
}

export default PostDevices;

const styles={

    servBc:{
        height:'500px',
        width:'400px',
        color:'#111',
        fontSize:'30px',
        textAlign:'center',
        cursor:'pointer'
    },
    servBcBody:{
        height:'300px',
        fontSize:'19px',
        opacity:'0.7',
        padding:'0 1.5vw', 
        overflow:'hidden'

    },
    h:{
        height:'17px',
        overflow:'hidden'
    }
    



};