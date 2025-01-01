import './App.css';
import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ResearchlyMockup2 from './assets/ResearchlyFullMockupt2.png';
import ResearchlyMockup3 from './assets/ResearchlyFullMockupt3.png';
import ResearchlyMockup4 from './assets/ResearchlyFullMockupt4.png';



import logo from './assets/logo.png';


import { FaXTwitter } from "react-icons/fa6";





// import appstore from './assets/appstore.png';
// import googleplay from './assets/googleplay.png';
// import mockup5 from './assets/screen5.png';
// import { FaApple } from "react-icons/fa";
// import { IoLogoGooglePlaystore } from "react-icons/io5";
// import { FaYoutube } from "react-icons/fa";
// import { RiPerplexityFill } from "react-icons/ri";
// import { RiImageCircleAiFill } from "react-icons/ri";
// import logo from './assets/appiconvol4.png';
// import ConfettiExplosion from 'react-confetti-explosion';


const App = () => {

  // const [isPopupVisible, setPopupVisible] = useState(false);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [error, setError] = useState('');
  // const [isExploding, setIsExploding] = useState(false);
  // const [signUpSpots, SetSignUpSpots] = useState(84);








  
  return (
    <>
      <div style={{ margin: 0, padding: 0 ,scrollbarWidth:"none"}}>
        

        <div style={{ position: "relative", zIndex: 999 ,scrollbarWidth:"none"}}>
         <div
           style={{
             position: "absolute",
             top: 0,
             left: 0,
             margin: "10px 0 0 20px"
           }}
         >
           <img
             src={logo}
             alt="Researchly Logo"
             style={{
               height: 50,
               objectFit: "contain"
             }}
           />
         </div>
       </div>



        {/* Fixed background stays in place */}
        <div
          className="backgroundContainer"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: -1
          }}
        >
          <ReactFlow defaultNodes={[]} defaultEdges={[]}>
            <Background variant={BackgroundVariant.Lines} gap={30} color="#f1f1f1" lineWidth={0.5} />
          </ReactFlow>
        </div>

        {/* Main content wrapper that scrolls with the page */}
        <div className="container" style={{position:"relative", zIndex: 1,scrollbarWidth:"none"}}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 500,
          position: 'relative',
          zIndex: 2,
          
        }}>
          <h1
           className='initialHeading'
           style={{
            marginTop:100,
            fontFamily: 'Lato, sans-serif',
            fontSize: '3.5rem',
            color: '#333333',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1.5rem',
            width: '80%',
          }}>
            AI-powered research  engine
          </h1>


          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '1.2rem',
            color: '#666666',
            maxWidth: '600px',
            textAlign: 'center',
            lineHeight: '1.6',

          }}>
            ResearchScope saves you time and effort by finding the most relevant studies for your topic. Powered by AI, it scans over 222 million papers to give you accurate and focused results in seconds.            
          </p>



          <button style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '1.1rem',
            color: 'white',
            backgroundColor: '#222222',
            border: 'none',
            borderRadius: '15px',
            padding: '12px 32px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            marginTop: '2rem'
          }} 
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Get Started
          </button>
        </div>






        <div className="showaceBox1" style={{
          width:"100%",
          // maxHeight:700,
          marginTop:50,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>

         <h1
         className='ShowcaseHeading'
         style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: 35,
            color: '#333333',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '60%',
            
          }}>
            Enter your reseach topic & generate Optimized queries
          </h1>

          <img 
              className='rightSideWebImage'
              src={ResearchlyMockup2}
              alt="Researchly Logo"
              style={{
                width: "80%",
                objectFit: "cover",                
              }}
            />

        </div>






        <div className="showaceBox1" style={{
          width:"100%",
          marginTop:50,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>

         <h1 
         className='ShowcaseHeading'
         style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: 35,
            color: '#333333',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '60%',
            
          }}>
            Wait for our engine to retrieve most relevant studies from 222,960,367 papers.
          </h1>

          <img 
              className='rightSideWebImage'
              src={ResearchlyMockup3}
              alt="Researchly Logo"
              style={{
                width: "80%",
                objectFit: "cover",                
              }}
            />

        </div>





        <div className="showaceBox1" style={{
          width:"100%",
          marginTop:50,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>

          
         <h1
         className='ShowcaseHeading'
         style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: 35,
            color: '#333333',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '60%',
            
          }}>
            If still not satisfied, use our pre-trained AI.
          </h1>

          <img 
              className='rightSideWebImage'
              src={ResearchlyMockup4}
              alt="Researchly Logo"
              style={{
                width: "80%",
                objectFit: "cover",                
              }}
            />

          

        </div>



         



            <div 
              className='footerButton'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginBottom: 10,
                flexDirection: "row",
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => {
                window.open('https://x.com/D_enukidze');
              }}
            >
              <FaXTwitter color='black' size={20}/>
            </div>



          <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',width: '100%',marginBottom:20,flexDirection:"row",gap:10}}>
            <p style={{color:"black",fontSize:15}}>support : inforesearchscope@gmail.com</p>
            {/* <p style={{color:"black",fontSize:12}}>creator : enukidzedachikm@gmail.com</p> */}

          </div>
          

      
       
      </div>

      {/* <div className="footerBox" style={{marginTop:-30,width:"100%",height:100,display: 'flex',alignItems: 'center',flexDirection: 'column',borderTop:"1px solid rgb(170, 170, 170)"}}>

      </div> */}

      </div>
    </>

 
  );
};

export default App;