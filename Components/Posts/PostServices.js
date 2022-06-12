import React from "react";
import Link from "next/link";

const PostServices = (props)=>{
    return(
    <Link href={`/posts/post/[postid]`} as={`/posts/post/${props.props.id}`}>
    <div style={styles.servBc} className='inx-sec-services-pl'>
        <div>

        <h5>{props.props.nameMain}</h5>
        
        <div style={styles.servBcBody}>
            <p align='justify' style={styles.p}>
                {props.props.someText}
            </p>
        </div>

        </div>
    </div>
    </Link>
    )
}

export default PostServices;

const styles={

    servBc:{
        height:'500px',
        width:'400px',
        color:'#111',
        fontSize:'30px',
        textAlign:'center',
        cursor:'pointer',
        margin:'20px;'
    },
    servBcBody:{
        height:'300px',
        fontSize:'19px',
        opacity:'0.7',
        padding:'0 1.5vw', 
        overflow:'hidden'

    }
    



};