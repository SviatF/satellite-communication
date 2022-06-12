import React from "react";
import Link from "next/link";

const PostNew=(props)=>{

    return(

        <Link href={`/news/post/[newsid]`} as={`/news/post/${props.props.id}`}>
        <div key={props.props.id} className='index-sec-news-body'>
            <img height={'175px'} className='index-sec-news-body-img' src={props.props.photo}></img>
                 <h4  style={styles.h}>{props.props.title}</h4>
            <p className='index-sec-news-body-p' align=' justify '>{props.props.someText}</p>
                <div className='index-sec-news-body-ft'>
                             <h4>{props.props.datePost}</h4>
                </div>     
        </div>
        </Link>
    )
}
export default PostNew;

const styles={
    h:{
        height:'60px',
        overflow:'hidden'
    }
}