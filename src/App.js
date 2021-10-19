import logo from './logo.svg';
import './App.css';
import Video from './components/Video/Video';
import video1 from '../src/media/video5.mp4'
import video2 from '../src/media/video6.mp4'
import video3 from '../src/media/video4.mp4'
import { useState } from 'react';
function App() {
  const[liker,setLiker] = useState([]);
  const list = [
    {
      id : 1,
      user : "@jhon Smith",
      song : "Bohu dur poth",
      description : 'what a nice video!',
      like : 14,
      share : 5,
      message : 8,
      video : video1,
    },
    {
      id : 2,
      user : "@Andra Rasel",
      song : "Nature sound",
      description : 'Wow it is Excilent',
      like : 20,
      share : 7,
      message : 4,
      video : video2,
    },
    {
      id : 3,
      user : "@adam don",
      song : "Nature sound",
      description : 'Wow it is Excilent',
      like : 20,
      share : 7,
      message : 4,
      video : video3,
    }
  ]
  //handle like
  const handleLike = (passId) => {
    const available = liker.find(val => val === passId);
    if(available){
      const remove = liker.filter(val => val !== passId);
      setLiker([remove]);
    }else{
      setLiker([...liker,passId]);
    }
  }
  // console.log(liker);
  return (
    <div className="app__videos">
      {
        list.map(item => <Video key={item.id} liker={liker} handleLike={handleLike} video={item}></Video>)
      }
    </div>
  );
}

export default App;
