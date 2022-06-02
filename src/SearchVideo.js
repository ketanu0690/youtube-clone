import React from 'react'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import './SearchVideo.css'; 
import VideoRow from './VideoRow';

const SearchVideo = () => {
  return (

    <div className="searchPage">
    <div className="searchPage__filter">
    <TuneOutlinedIcon />
    <h2>FILTER</h2>
    </div>
    <hr/>
    <ChannelRow
    image="https://i.ytimg.com/vi/XnjA8PlwFIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPACGlOCmv8syl811AaIDMeJmrMA"
    channel="clever Programmer"
    verifiedsubs="1.2M"
    noOfVideos={200}
    description="Clever Programmer is a channel for learning and sharing knowledge."
    /> 

<hr/>
<VideoRow
views={300}  subs="1.2M"
description="Clever Programmer is a channel for learning and sharing knowledge."
timestamp= "1 days ago"
channel="clever Programmer"
title="Clever Programmer"
image="https://i.ytimg.com/vi/XnjA8PlwFIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPACGlOCmv8syl811AaIDMeJmrMA"
/>
<VideoRow
views={300}  subs="1.2M"
description="Clever Programmer is a channel for learning and sharing knowledge."
timestamp= "1 days ago"
channel="clever Programmer"
title="Clever Programmer"
image="https://i.ytimg.com/vi/XnjA8PlwFIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPACGlOCmv8syl811AaIDMeJmrMA"
/>
<VideoRow
views={300}  subs="1.2M"
description="Clever Programmer is a channel for learning and sharing knowledge."
timestamp= "1 days ago"
channel="clever Programmer"
title="Clever Programmer"
image="https://i.ytimg.com/vi/XnjA8PlwFIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPACGlOCmv8syl811AaIDMeJmrMA"
/>
<VideoRow
views={300}  subs="1.2M"
description="Clever Programmer is a channel for learning and sharing knowledge."
timestamp= "1 days ago"
channel="clever Programmer"
title="Clever Programmer"
image="https://i.ytimg.com/vi/XnjA8PlwFIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPACGlOCmv8syl811AaIDMeJmrMA"
/>
<VideoRow
views={300}  subs="1.2M"
description="Clever Programmer is a channel for learning and sharing knowledge."
timestamp= "1 days ago"
channel="clever Programmer"
title="Clever Programmer"
image="https://i.ytimg.com/vi/XnjA8PlwFIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPACGlOCmv8syl811AaIDMeJmrMA"
/>
<VideoRow
views={300}  subs="1.2M"
description="Clever Programmer is a channel for learning and sharing knowledge."
timestamp= "1 days ago"
channel="clever Programmer"
title="Clever Programmer"
image="https://i.ytimg.com/vi/XnjA8PlwFIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPACGlOCmv8syl811AaIDMeJmrMA"
/>

    </div>
  )
}

export default SearchVideo