import { useState } from 'react';
import './App.css';
import mockup1 from './assets/mockup113.png';
import mockup2 from './assets/mockup111.png';
import mockup3 from './assets/mockup112.png';
import mockup4 from './assets/mockup114.png';
import mockup6 from './assets/mockup116.png';
import mockup7 from './assets/frame4.png';


// import appstore from './assets/appstore.png';
// import googleplay from './assets/googleplay.png';
// import mockup5 from './assets/screen5.png';
// import { FaApple } from "react-icons/fa";
// import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { RiPerplexityFill } from "react-icons/ri";
import { RiImageCircleAiFill } from "react-icons/ri";
import logo from './assets/appiconvol4.png';
import ConfettiExplosion from 'react-confetti-explosion';


const App = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isExploding, setIsExploding] = useState(false);


  const handleSignUp = () => {
    setIsExploding(false);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setError('');
  };

  const handleSave = () => {
    // Handle save logic here

    if (!name || !email) {
      setError('Both fields are required.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }else{

    






    setIsExploding(true);
    console.log('Name:', name);
    console.log('Email:', email);
    setPopupVisible(false);


    fetch('https://gbaivol1server-production.up.railway.app/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, email: email }),
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));



    setName('');
    setEmail('');

   }

  };





  
  return (
    <>

    <body>

      <div className="container">
        <div className="heading"></div>        
        <div className="mainHeading">
          <img src={logo} alt="Sample" style={{ width: 120, height: 'auto' }} />
          <p style={{ fontFamily: 'Lato',textAlign:"center", color: 'white', fontSize: 50, fontWeight: 700, }}>
            Best AI tools at your fingertips.
          </p>
          {isExploding && <ConfettiExplosion />} 
         <p style={{ fontFamily: 'Lato',textAlign:"center", color: '#6a6a6a', fontSize: 20, fontWeight: 400 }}>
            Unlimited power of GPT-4o, Perplexity, Stable Diffusion and more.
          </p>
          <div className="buttonsContainer" style={{width:"100%",height:60,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5,marginTop:40}}>

          {/* <button style={{height:60,width:160,borderRadius:7,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:5}}>
           <IoLogoGooglePlaystore size={25} />
           Play store
          </button> */}
          <button onClick={()=>{handleSignUp()}}          style={{color:"black",height:50,width:150,borderRadius:7,backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:5}}>
            Sign up! 🚀
          </button>

          </div>

          {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">

              <span className="close" onClick={closePopup}>&times;</span>
              <h2 style={{marginTop:10}}>Thank you for your interest! 🤙</h2>
              <p> Get Early access!</p>

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '80%', padding: '10px', borderRadius: '5px',  border:`1px solid ${error && !name ? '#D2042D' : '#ccc'}` ,marginTop:20}}
              />

              {error && !name && <label style={{ fontSize: 10, color: "#D2042D" }}>{error}</label>}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '80%', padding: '10px', borderRadius: '5px', border:`1px solid ${error && !name ? '#D2042D' : '#ccc'}` ,marginTop:20 }}
              />


              {error && !name && <label style={{ fontSize: 10, color: "#D2042D" }}>{error}</label>}

              <button onClick={handleSave} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: 'white', color: 'black', border: 'none',marginTop:15 }}>
                Save 🎉
              </button>
              {/* Add your sign-up form here */}
            </div>




          </div>
        )}

          

           <div className="showImagesRow">
             <img src={mockup2} alt="Sample" className="imagesStyle" />  
             <img src={mockup3} alt="Sample" className="imagesStyle" />  
             <img src={mockup1} alt="Sample" className="imagesStyle" />  
             <img src={mockup7} alt="Sample" className="newImage1" />  

           </div>

        </div>


        <div className="showcaseRow">

          <div className="explainerBox">

            <FaYoutube size={90} color='white'/>
            <p style={{ fontFamily: 'Lato', color: 'white', fontSize: 30, fontWeight: 700, }}>
              YouTube Summarizer
            </p>
            <p style={{ fontFamily: 'Lato', color: 'white', fontSize: 18, fontWeight: 400,width:"100%",textAlign:"center",letterSpacing:0.5 }}>
              {/* Unlimited power of GPT-4o, Perplexity, Stable Diffusion and more. */}

              Perfect for learners and professionals alike, it saves time by extracting key points and presenting them in a clear format. Whether you're catching up on educational content, staying informed with lectures, or reviewing tutorials, this AI-powered tool ensures you grasp the essence without watching hours of footage. Simply paste the URL, and let our smart summarizer do the rest—effortless and efficient!            </p>
          </div>

          <div className="explainerBox" style={{borderRadius:"50%",backgroundColor:"#222222",justifyContent:"center",alignItems:"center"}}>

          <img src={mockup4} alt="Sample" style={{ width: 300, height: 'auto',marginTop:60 }} />  
           
          </div>


        </div>


        <div className="showcaseRow2">


              <div className="explainerBox" style={{borderRadius:"50%",backgroundColor:"#222222",justifyContent:"center",alignItems:"center"}}>
              
              <img src={mockup6} alt="Sample" style={{ width: 300, height: 'auto',marginTop:60 }} />  
               
              </div>
              
              
              
                <div className="explainerBox">
              
                  {/* <FaYoutube size={90} color='red'/> */}
                  <RiPerplexityFill size={90}/>
                  <p style={{ fontFamily: 'Lato', color: 'white', fontSize: 30, fontWeight: 700, }}>
                    Perplexity
                  </p>
                  <p style={{ fontFamily: 'Lato', color: 'white', fontSize: 18, fontWeight: 400,width:"100%",textAlign:"center",letterSpacing:0.5 }}>
                    {/* Unlimited power of GPT-4o, Perplexity, Stable Diffusion and more. */}
                    Our Perplexity News Bot keeps you instantly updated with the latest news and trends. Ask a question, and it delivers clear, accurate answers using real-time, reliable sources. Whether it’s breaking news, current events, or trending topics, this bot ensures you’re always in the know. Fast, easy, and smart—it’s your go-to tool for staying ahead.
          
                  </p>
                </div>
              
                
        </div>



        <div className="showcaseRow3">


             
              
              
              
                <div className="explainerBox">
              
                  {/* <FaYoutube size={90} color='red'/> */}
                  <RiPerplexityFill size={90}/>
                  <p style={{ fontFamily: 'Lato', color: 'white', fontSize: 30, fontWeight: 700, }}>
                    Perplexity
                  </p>
                  <p style={{ fontFamily: 'Lato', color: 'white', fontSize: 18, fontWeight: 400,width:"100%",textAlign:"center",letterSpacing:0.5 }}>
                    {/* Unlimited power of GPT-4o, Perplexity, Stable Diffusion and more. */}
                    Our Perplexity News Bot keeps you instantly updated with the latest news and trends. Ask a question, and it delivers clear, accurate answers using real-time, reliable sources. Whether it’s breaking news, current events, or trending topics, this bot ensures you’re always in the know. Fast, easy, and smart—it’s your go-to tool for staying ahead.
          
                  </p>
                </div>
                


                <div className="explainerBox" style={{borderRadius:"50%",backgroundColor:"#222222",justifyContent:"center",alignItems:"center",marginTop:60}}>
                 <img src={mockup6} alt="Sample" style={{ width: 300, height: 'auto',marginTop:120 }} />  
                </div>
                
        </div>


        <div className="showcaseRow">

          <div className="explainerBox">

            <RiImageCircleAiFill  size={90} color='white'/>
            <p style={{ fontFamily: 'Lato', color: 'white', fontSize: 30, fontWeight: 700, }}>
              Image Generator
            </p>
            <p style={{ fontFamily: 'Lato', color: 'white', fontSize: 18, fontWeight: 400,width:"100%",textAlign:"center",letterSpacing:0.5 }}>
              {/* Unlimited power of GPT-4o, Perplexity, Stable Diffusion and more. */}
              Our Image Generator, powered by the latest Stable Diffusion technology, turns your ideas into stunning visuals. Describe what you want, and it creates high-quality, detailed images in seconds. From art and design to creative projects, it’s perfect for bringing your imagination to life. Fast, powerful, and easy to use—your vision, made real.
              </p>
          </div>

          <div className="explainerBox" style={{borderRadius:"50%",backgroundColor:"#222222",justifyContent:"center",alignItems:"center"}}>

          <img src={mockup1} alt="Sample" style={{ width: 300, height: 'auto',marginTop:60 }} />  
           
          </div>


        </div>




          <p style={{ textAlign:"center",fontFamily: 'Lato', color: '#bebebe', fontSize: 15, fontWeight: 400, marginTop:120}}>
          Copyright © 2024 Kwant Development LLC
          </p>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <a href="https://sites.google.com/view/greyboxaitermsofuse/home"  target="_blank" rel="noopener noreferrer" style={{ textAlign:"center",fontFamily: 'Lato', color: '#bebebe', fontSize: 12, fontWeight: 400, marginTop: 10, marginBottom: 15 }}>
              Terms of Service   
            </a>

            <p style={{height:"100%",width:2,backgroundColor:"white"}}></p>

            <a href="https://sites.google.com/view/greyboxaiprivacypolicy/home"  target="_blank" rel="noopener noreferrer" style={{ textAlign:"center",fontFamily: 'Lato', color: '#bebebe', fontSize: 12, fontWeight: 400, marginTop: 10, marginBottom: 15 }}>
              Privacy Policy   
            </a>

            <p style={{height:"100%",width:2,backgroundColor:"white"}}></p>

            <a style={{ textAlign:"center",fontFamily: 'Lato', color: '#bebebe', fontSize: 12, fontWeight: 400, marginTop: 10, marginBottom: 15 }}>
              infogreyboxai@gmail.com
            </a>
          </div>

          {/* <p style={{ fontFamily: 'Lato', color: '#bebebe', fontSize: 12, fontWeight: 400, marginTop:10,marginBottom:30}}>
            contact us infogreyboxai@gmail.com
          </p> */}


       



      </div>

     
      </body>

 
    </>
  );
};

export default App;