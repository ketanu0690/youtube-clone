import React from "react";
import "../CSS/VideoCard.css";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const VideoCard = ({
  image,
  // url,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  video
}) => {
  return (
    <div className="videoCard">
      <img  className="videoCard__thubnail" src={image} alt="" />
      {/* <video  className="videoCard__thubnail"  controls>
  <source src={video} type="video/mp4"/>
</video> */}
      <div className="videoCard__info">
        <img className="videoCard__avatar" alt={channel} src={channelImage} />

        {/* <video src={video} alt="video"></video> */}

        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>

          <p>
            {views} • {timestamp}{" "}
          </p>

        </div>
      </div>
    </div>
  );
};

export default VideoCard;
