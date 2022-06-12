 import '../styles/globals.scss'
 import '../styles/footer.scss'
 import '../styles/navbar.scss'
 import NextNProgress from "nextjs-progressbar";


export default function MyApp({ Component, pageProps }) {
    return<>
    <NextNProgress
  color="#fff"
  startPosition={0.9}
  stopDelayMs={0}
  height={3}
  showOnShallow={false}
  />
    <Component {...pageProps} />
    <style jsx global>{`
    
    .hd-100vh{
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      align-items: center;
      
       background: url('/../header.jpg') no-repeat ;
       -moz-background-size: 100%; /* Firefox 3.6+ */
       -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
       -o-background-size: 100%; /* Opera 9.6+ */
       -ms-background-size:100%;
       background-size:100%;
        
       height: 100vh;
    }
    .hd-row {
       color:white;
       margin:6vw 15vw 0 0;
       font-family: 'Teko', sans-serif;
       padding:0;
      }
      .hd-row :first-child{
        font-size:30px;
        margin:0;
      }
      .hd-row :last-child{
        font-size:20px;
        margin:0;
        opacity:0.7;
      }

      .sec-wh{
        background:#fff;
        padding:0.1vw;
      }
      .sec-bk{
        background:#111;
        padding:0.1vw;
        color:#fff;
      }
      #w90{
        width:90%;
        margin:0px auto;
      }
      
      h3{
        font-size:40px;
        font-family:Comfortaa;
      }
      .sec-serv-h{
        text-align:center;
      }
    
      .btn {
        color: black;
        cursor: pointer;
        display: block;
        font-size:16px;
        font-weight: 400;
        line-height: 45px;
        margin: 0px auto;
        max-width: 160px; 
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        width: 100%;
      }
      .btn-5 {
        color:black;
        text-align: center;
        border: 0 solid ;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
        outline: 1px solid;
        outline-color: black;
        outline-offset: 0px;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
      } 
    
      .btn-5:hover {
        box-shadow: inset 0 0 20px #111, 0 0 20px #1212;
        outline-color: rgba(255, 255, 255, 0);
         outline-offset: 15px; 
      }
      .btn-pd{
          padding: 25px;
      }
      .btn-wh{
        color: #fff;
        text-align: center;
        border: 0 solid ;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
        outline: 1px solid;
        outline-color: #fff;
        outline-offset: 0px;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
      }
      .btn-wh:hover {
        box-shadow: inset 0 0 20px #fff, 0 0 20px #fff;
        outline-color: #fff;
         outline-offset: 15px; 
      }
      .index-sec-news{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-around;
        align-items:center;
        width:100%;
         margin:0 auto;
      }

      .index-sec-news-body{
        width:325px;
        heigth:350px;
        background-color:#171717;
        border-radius:1%;
        color:white;
        padding:15px;
        margin:0 1vw 20px 0;
    }
    .index-sec-news-body-img{
      display:block;
      margin:0px auto;
      width:300px;
      overwflow:hidden;
  }
  .index-sec-news-body-p{
    width:100%;
    height:119px;
    overflow:hidden;
}
  .index-sec-services{
     display:flex;
     flex-direction:row;
     flex-wrap:wrap;
     justify-content:center;
      
     margin:0px auto;
     
}
.index-sec-services>div.inx-sec-services-pl{
  display:block;
  border-width: 3px 3px 3px 3px;
  border-style: ridge ridge ridge ridge ;
  border-color: #adadad #e0e0e0 #adadad #e0e0e0;
  box-shadow: 5px 5px 5px -4px #000000;
  cursor:poiner;
  -webkit-transition: all 0.3s ease;;
  -moz-transition: all 0.3s ease;;
  -o-transition: all 0.3s ease;;
  -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;

}

.inx-sec-services-pl:hover{
  cursor:poiner;
  transform: scale(1.1);
  transition-duration: .7s;
}
.sec-bc-hd{
  background:url(/../header.jpg) no-repeat fixed;
        background-size:100%;
        height:auto
}
.sc-bc-post-p{
      width:45%;
        color:#fff;
        font-family:Comfortaa;
}
.inx-sec-services-pl div:hover{
  font-weight:600;
  }

  .hd-about{
    display: flex;
        justify-content: center;
        flex-direction:column;
        align-items: center;
        color:white;
         background: url(/../images/about.jpg) no-repeat ;
         background-size:175%;
         height: 100vh
  }


  @media only screen and (max-width:1415px){
    .sc-bc-post-p{
      width:100%;
      margin:10px;
    }
  }
  @media only screen and (max-width:950px){
    NextNProgress{
      display:none;
    }
    .hd-100vh{
      height:auto;
    }
    .hd-about{
      background-size:350%;
    }
    .hd-row{
      margin-bottom:2vw;
    }
    h,h3,h4{
      text-align:center;
    }
    .sec-bc-hd{
      background:#121212;
      min-height:100vh;
    }
    
    .sc-bc-post-img{
      height:300px;
    }
  }

  @media only screen and (max-width:678px){
    .sc-bc-post-img{
      height:200px;
      margin:0;
    }
  }
  @media only screen and (max-width:430px){
    .sc-bc-post-img{
      height:150px;
      margin:0;
    }
  }


    `}
    </style>
    </> 
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  