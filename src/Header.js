import React from 'react';
import './Header.css';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';

const Header = () => {
  const [inputText, setInputText] = React.useState('');

const search  = () => {
  console.log("search");
}

  return (
    <div className='header'>
    <div className="header__left">
    <MenuIcon/>
    <Link to="/">
<img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
</Link> 
    </div>

<div className="header__input">
<input  onChange={e=>setInputText(e.target.value)}  value={inputText} type="text" placeholder='Search' />
 <Link to={`/search/${inputText}`}>
 <SearchIcon  className='header__inputButton' onClick={search} />
  </Link>
</div>

<div className="header__icons">
<VideoCallSharpIcon  className='header_icon'/>
 <AppsIcon  className='header_icon'/>
 <NotificationsIcon  className='header_icon'/>
<AccountCircleIcon/>
</div>

 </div>
  )
}

export default Header