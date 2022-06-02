import React,{useEffect} from 'react'
import './RecommeandedVideo.css'
import VideoCard from './VideoCard'
import axios from 'axios';

const RecommeandedVideo = () => {

const [videos,setVideos] = React.useState([]);

  const  Api = async()=>{

    await axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=Recommeanded&numResults=10`)
  
    .then(response =>{
      console.log(response.data.results);
      setVideos(response.data.results);
    })
    .catch(error =>{
      console.log(error);
    })

  }
  useEffect(()=>{
    // console.log("App.js is running");
   Api()
  
  },[]);
  


  return (
    <div className='recommendedVideos'>
    <h2>Recommeanded</h2> 
    <div className="recommendedVideos_videos">
{
  videos.map(video =>{
    return <VideoCard key={video.id} video={video.video} channel="dev to learn"  timestamp="3 Days Ago" views="2M Views" title="tutorial React Native " channelImage="https://yt3.ggpht.com/Tr9LSWwMBLv3rnJKAMjef-jhFPjz-JNUl8JR31DvQnYdp2eufTNl9K1Z_rFZarrtCDDqpix90MI=s68-c-k-c0x00ffffff-no-rj" image="https://i.ytimg.com/vi/XnjA8PlwFIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPACGlOCmv8syl811AaIDMeJmrMA"

    />
})
  }
      
    </div>
    </div>
  )
}

export default RecommeandedVideo