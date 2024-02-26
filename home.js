import React ,{ useState }from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../Style/Home.css';






 const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return(
    <div>
  <nav className='nav'>
    <div className='logo'>
      <img
        alt="Logo"
        src="https://cdn.discordapp.com/attachments/1205756212445192263/1207363674990313562/Dr.Palamsetty_Innovations123.png?ex=65df600b&is=65cceb0b&hm=d8811294349ee35313077b961c60da34b5a054821e87fd435d7ed27f448f3c38&" 
        style={{ height: '30px', width: '100px' }}  
      />
    </div>
    <div className="menu" onClick={() =>{
      setMenuOpen(!menuOpen);
    }}>
      <span></span>
      <span></span>
      <span></span>
      
    </div>
   
    <ul >
      <li className='navLi'><Link to="/" className="navLink">Home</Link></li>
      <li className='navLi'><Link to="/programmes" className="navLink">Our Programmes</Link></li>
      <li className='navLi'><Link to="/clubs" className="navLink">Clubs</Link></li>
      <li className='navLi'><Link to="/about" className="navLink">About Us</Link></li>
      <li className='navLi'><Link to="/contact" className="navLink">Contact Us</Link></li>
    </ul>

  
    <div className='loginButton' ><Link to="/Login" className="navLink">Login</Link></div>


  </nav>

  
   {    
     menuOpen && 
     <ul  className= "open">
    <li className='navLi'><Link to="/" className="navLink">Home</Link></li>
    <li className='navLi'><Link to="/programmes" className="navLink">Our Programmes</Link></li>
    <li className='navLi'><Link to="/clubs" className="navLink">Clubs</Link></li>
    <li className='navLi'><Link to="/about" className="navLink">About Us</Link></li>
    <li className='navLi'><Link to="/contact" className="navLink">Contact Us</Link></li>
    </ul>}

</div>
  
  );
  };


const ImageSlider = () => (
  <div className='sliderContainer'>
    <Carousel showThumbs={false} autoPlay ={true} infiniteLoop interval={2000} showStatus={false} className='carouselContainer'>
      <div>
        <img alt="Slide 1" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756751660453908/1.png?ex=65d9877b&is=65c7127b&hm=be4838c224e55ea6ba8927a529c377d79fff4bef1a4e35c0d63e0faadd849744&" className="carouselImage" />
      </div>
      <div>
        <img alt="Slide 2" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752088408094/2.png?ex=65d9877b&is=65c7127b&hm=e780502dd16513f61f7f76c66343774757556433a2db3abe78825f00a2b27c29&" className="carouselImage" />
      </div>
      <div>
        <img alt="Slide 3" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752545583144/3.png?ex=65d9877b&is=65c7127b&hm=fdbb401e6ca44b0dde5a61315c99f36d76eea6784d5b0f1e8818fe0d37f876c6&" className="carouselImage" />
      </div>
    </Carousel>
  </div>
);


const EventCard = ({ title, description, imageUrl }) => (
  <Card className='eventCard'>
    <CardMedia
      component="img"
      alt={title}
      height="200"
      image={imageUrl}
      className='eventImage'
    />
    <CardContent className='eventCardContent'>
      <Typography variant="h5" className='eventTitle'>
        {title}
      </Typography>
      <Typography variant="body2" className='eventDescription'>
        {description}
      </Typography>
      <button className='registerButton'><Link to="/events">Enroll Now </Link> </button>
    </CardContent>
  </Card>
);
<hr></hr>

const ProgramGrid = () => (
  <div className='programGrid'>
    <div className='programRow'>
      <div className='programCard'>
        <img alt="Program 1" src='https://cdn.discordapp.com/attachments/1205756212445192263/1205763020190384198/5.png?ex=65d98d52&is=65c71852&hm=b4109f5252b78111b15bc7288d97574bf5f072cd83428a3ce0f84a49cc364d73&' className='programImage' />
        <div className='programName'>Courses</div>
      </div>
      <div className='programCard'>
        <img alt="Program 2" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763020463149106/6.png?ex=65d98d52&is=65c71852&hm=31cb1a34d1bd095481029b17d2e52ea055a468b91cb389a4789500f41e646c89&" className='programImage' />
        <div className='programName'>Workshops</div>
      </div>
    </div>
    <div className='programRow'>
      <div className="programCard">
        <img alt="Program 3" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763020731453440/7.png?ex=65d98d52&is=65c71852&hm=d1ddb5fd6482ae5ec26a42643ab3a7d3143c02fb65de715c2429b5baf6b6f06a&" className=" programImage" />
        <div className='programName'>Internships</div>
      </div>
      <div className='programCard'>
        <img alt="Program 4" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763021046030356/8.png?ex=65d98d52&is=65c71852&hm=0f5c25b778feaaaaff192e1d2317271f0f973466c7d9b141828e1940ea246890&" className=" programImage" />
        <div className='programName'>Webinars</div>
      </div>
    </div>
    

  </div>
);

const ClubCard = ({ imageSrc, clubName }) => (
  

  <Card className='clubCard'>
    <CardMedia
      component="img"
      alt={clubName}
      image={imageSrc}
      className='clubImage'
      style={{width:'150px',margin:'120px',marginLeft:'40%',borderRadius:'12px',height:'50px'}}
    />
    <CardContent className='clubCardContent'>
      <Typography variant="h6" className='clubName'>
        {clubName}
      </Typography>
      <button className='registerButton1'><Link to="/events">Join No </Link> </button>
    </CardContent>
  </Card>
  
);

const MainContent = () => (
  <main className='main'>
    <ImageSlider />
    <h1 className='eventheading'>UPCOMING EVENTS</h1>
    <div className='eventsSection'>
      <EventCard
        title="Event 1"
        description="Description of event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-img.png"
      />
      <EventCard
        title="Event 2"
        description="Description of event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-img.png"
      />
      <EventCard
        title="Event 3"
        description="Description of event 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-img.png"

      />
    </div>
  

    
    <h1 className='eventheading'>Our Programmes</h1>
    <ProgramGrid />
  
    

     <h1 className='eventheading'>OUR CLUBS</h1>
     <div className="clubSection" style={{
     backgroundImage: 'url(https://media.discordapp.net/attachments/1205756212445192263/1209453048263479348/club_background.png?ex=65e6f9ed&is=65d484ed&hm=62024ebbcb2b02ba5a8a0d863ad1cafd339cd7ff775e26a6258a1e18e062cebd&=&format=webp&quality=lossless&width=1322&height=662)',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     }}>
    
      <ClubCard imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205786539808784394/15.png?ex=65d9a339&is=65c72e39&hm=cd0999048c7718602ec123238ee9168ab72b5816fe1ebf28138bab7a9fbcb91d&" clubName="Innovation Club" />
      <ClubCard imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205787286873047080/12.jpg?ex=65d9a3eb&is=65c72eeb&hm=0f2ea5049c2bbaaa928563a0439a187735fec06ab9d6686827a4dc953c7b427b&" clubName="Technology Club" />
      <ClubCard imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205787387301732393/14.jpg?ex=65d9a403&is=65c72f03&hm=6b9bb339bd0cf9f542ba52daf632df6829846fc6040e9cace1eb9d6c548e8bab&" clubName="Research Club" />
    
    </div>

  </main>
);

const AboutSection = () => (
  <div>
  <div className='aboutSection'>
    <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between' ,top:'0' ,marginLeft:'5vw'}}>
      <div style={{ flex: 1,textAlign:'left' ,top:0,color:'#ffffff'}}>
        <h1 style={{ textAlign: 'left',top:0, marginBottom: '20px' }}>About Us</h1>
        <p>
        Welcome to Dr. Palamsetty Innovations, where we are dedicated to empowering students in their academic journey and beyond. Founded with a passion for education and innovation, we strive to provide comprehensive support to students, helping them excel in their studies and prepare for successful careers.At Dr. Palamsetty Innovations, we understand the importance of staying ahead in today's rapidly evolving world. That's why we offer a range of services, including academic assistance, internship opportunities, courses, workshops, and seminars. Our goal is to equip students with the knowledge, skills, and experiences they need to thrive in their academic pursuits and transition seamlessly into the professional realm.
        </p>
      </div>
      <img
      className='aboutusimage'
        src="https://cdn.discordapp.com/attachments/1205756212445192263/1205772571379769464/10.jpg?ex=65d99637&is=65c72137&hm=93b4336bbd16fc3dfb3e6ed21bdc3801a5daf7f5ba3698050ba8f3696c2d69fd&"
        alt="Placeholder"
        style={{ width: '40vw', height: '40vw', marginLeft: '5vw',marginRight:'3vw' }}
      />
    </div>
  </div>
</div>

  
);

const StatisticsSection = () => (
  <div className='statisticsSection'>
    <div className="statisticItem" style={{ width: '100px', height: '200px', position: 'relative' }}>
      <div className='statisticValue'>1000+ <br></br>Students</div>
      <div className="statisticLine" style={{ left: '15%', transform: 'translateX(-50%)' }}></div>
    </div>
    <div className="statisticItem" style={{ width: '270px', height: '200px', position: 'relative' }}>
      <div className='statisticValue'>50+ <br></br>Sections</div>
      <div className="statisticLine" style={{ left: '15%', transform: 'translateX(-50%)' }}></div>
    </div>
    <div className="statisticItem" style={{ width: '270px', height: '200px', position: 'relative' }}>
      <div className='statisticValue'>20+ <br></br>Events</div>
      <div className="statisticLine" style={{ left: '15%', transform: 'translateX(-50%)' }}></div>
    </div>
  </div>
);

const Footer = () => (
  
  <footer className="footer" style={{display: 'flex', alignItems: 'left', justifyContent: 'space-between', padding: '30px' ,backgroundColor:' #053047'}}>
    
    <div style={{ marginRight: 'auto', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '5px' }}>Contact Us</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>• Company Name: ABC Corporation</li>
        <li>• Email: info@abccorp.com</li>
        <li>• Phone: (555) 123-4567</li>
        <li>• Address: 123 Main Street, Cityville, State, 12345</li>
      </ul>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 'auto', textAlign: 'left'}}>
      
      <h2 style={{ marginBottom: '10px' }}>Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>• Home</li>
        <li>• About Us</li>
        <li>• Partners</li>
        <li>• Clubs</li>
        <li>• Contact Us</li>
      </ul>
    </div>
    <div style={{ textAlign: 'center' ,display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ width: '300px', height: '100px',   overflow: 'hidden' }}>
  <img
    src="https://cdn.discordapp.com/attachments/1205756212445192263/1207363674990313562/Dr.Palamsetty_Innovations123.png?ex=65df600b&is=65cceb0b&hm=d8811294349ee35313077b961c60da34b5a054821e87fd435d7ed27f448f3c38&"
    alt="Circular Image"
    style={{ width: '270px', height: '60px', marginLeft:'25px',objectFit: 'cover' }}
  />
</div>

      <p style={{fontSize:'1.5rem',marginTop:'5px',marginBottom:'10px'}}>Follow us on</p>
      <div style={{ display: 'flex' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '30%', marginRight: '5px', overflow: 'hidden' }}>
  <img
    src="https://cdn.discordapp.com/attachments/1205756212445192263/1207609856513679431/image_5.png?ex=65e04552&is=65cdd052&hm=0d052c3aebd7b7df75f5f65ad8532f9fdf8f665d78f4ca2c39aa02d6522862e9&"
    alt="GitHUB Logo"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
<div style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px', overflow: 'hidden' }}>
  <img
    src="https://cdn.discordapp.com/attachments/1205756212445192263/1207606714573258772/Google_Icons-09-512.png?ex=65e04265&is=65cdcd65&hm=e7c6d65782130976ff74cb996d7fc194e9be15803d4fba5a6daaa85a32e11fa8&"
    alt="Circular Image"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>

<div style={{ width: '40px', height: '40px', borderRadius: '30%', marginRight: '5px', overflow: 'hidden' }}>
  <img
    src="https://cdn.discordapp.com/attachments/1205756212445192263/1207609856513679431/image_5.png?ex=65e04552&is=65cdd052&hm=0d052c3aebd7b7df75f5f65ad8532f9fdf8f665d78f4ca2c39aa02d6522862e9&"
    alt="GitHUB Logo"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <div className="app">
    <NavBar />
    <MainContent />
    <AboutSection />
    <StatisticsSection />
    <Footer />
  </div>
);

export default Home;
