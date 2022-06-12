import {useRouter} from 'next/router'
import {useState,useEffect} from 'react'
import {MainLayout} from '../../../Components/MainLayout'


export default function News({post:serverPost}){
    const [post,setPost]=useState(serverPost);
    const rout =useRouter();

    useEffect(()=>{
        async function load(){
              const res = await fetch(`http://localhost:4040/news/${rout.query.newsid}`);
               const data = await res.json()
               setPost(data)
            }
        if(!serverPost){
                load();
            }
       
        },[])
        if(!post){
            return <MainLayout>
                       <section className='sec-bc-hd'>
                    <div style={styles.submain}>    
                         <div style={styles.headSerc}>
                           <h1 style={styles.h1}>Loading....</h1>
                    </div>
                    <hr style={styles.hr}></hr>
                            <div style={styles.subnewCatalog}>
                                <div style={styles.newCatalog}>
                
                                 <p style={styles.per}>Loading....</p>

                    </div>
            </div>
        </div>
    </section>
                    </MainLayout>
            }
   // console.log(rout);
    return<MainLayout title={post.title}>


        <section className='sec-bc-hd'>
                    <div style={styles.submain}>    
                         <div style={styles.headSerc}>
                           <h1 style={styles.h1}>{post.title}</h1>
                    </div>
            <hr style={styles.hr}></hr>
            <div style={styles.subnewCatalog}>
                    <div style={styles.newCatalog}>
                
                          <p className='sc-bc-post-p' >{post.someText}</p>
                          <img className='sc-bc-post-img' height={'350px'} src={post.photo}/>

                    </div>
            </div>
        </div>
    </section>




        
    </MainLayout>
}
const styles={
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
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        alignItems:'center',
        margin:'0px auto'
    },
    per:{
        color:'black',
        width:'2vw'
    },
    h1:{
        color:'#fff',
        fontSize:'30px',
        
    },
    hr:{
        opacity:'0.5',
        margin:'0'
    },
    
    newCatalog:{
        display:'inline-flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        alignItems:'flex-start',
        width:'100%',
        margin:'0 auto',
        minHeight:'90vh'
       
     },
     subnewCatalog:{
        background:'#050505',
        padding:'2vw 0 2vw 0'
     }
};

News.getInitialProps = async ({query,req})=>{
    if(!req){
        return {post:null}
   }
    const res = await fetch(`http://localhost:4040/news/${query.postid}`);
    const post = await res.json()

    return{
        post
   }
  }

//   export async function getServerSideProps({query,req}){
   // if(!req){
     //   return{post:null}
   // }
 //   const res = await fetch(`http://localhost:4040/category/${query.postid}`);
//    const post = await res.json()

//    return{
//        props:{post}
 //   }
 //  }