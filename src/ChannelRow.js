import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import './ChannelRow.css';

const ChannelRow = ({
  image,
  channel,
  verifiedsubs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      {/* <img className="channelRow__logo" alt={channel} src={image} /> */}
      <AccountCircleIcon className="channelRow_logo" />
      <div className="channelRow__text">
        <h4>
          {channel}
          {verifiedsubs && <CheckCircleOutlineRoundedIcon />}
        </h4>

        <p>
          {verifiedsubs} subscribers . {noOfVideos} videos
        </p>
        
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
