import React from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlinedIcon';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlinedIcon';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlinedIcon';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlinedIcon';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlinedIcon';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlinedIcon';
import ListOutlinedIcon from '@mui/icons-material/ListOutlinedIcon';

const Navbar = () => {
    return (
        <div className='navbar'>
           <div className='wrapper' >
               <div className='search'>
                   <input type='text' placeholder='Search...' />
                   <SearchOutlinedIcon />
               </div>
               <div className='items'>
                   <div className='item'>
                       <LanguageOutlinedIcon className='icon'/>
                       English
                   </div>
                   <div className='item'>
                       <DarkModeOutlinedIcon className='icon'/>
                   </div>
                   <div className='item'>
                       <FullscreenExitOutlinedIcon className='icon'/>
                   </div>
                   <div className='item'>
                       <NotificationsNoneOutlinedIcon className='icon'/>
                       <div className='counter'>1</div>
                   </div>
                   <div className='item'>
                       <ChatBubbleOutlineOutlinedIcon className='icon'/>
                       <div className='counter'>1</div>
                   </div>
                   <div className='item'>
                       <ListOutlinedIcon className='icon'/>
                   </div>
                   <div className='item'>
                       <img
                        src='../../images/yo.jpg'
                        alt='yo'
                        className='avatar'
                       />
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Navbar;
