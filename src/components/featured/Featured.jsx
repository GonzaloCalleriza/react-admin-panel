import React from 'react';
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';


const Featured = () => {
    return (
        <div className="featured">
            <div className='top'>
                <h1 className='title'>Total Revenue</h1>
                <MoreVertIcon />
            </div>
            <div className='bottom'>
                <div className='featured-chart'>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={1} />
                </div>
                <p className='title'>Total sales made todays</p>
                <p className='amount'>$420</p>
                <p className='desc'>Too mach money spent</p>
                <div className='summary'>
                    <div className='item'>
                        <div className='item-title'>Target</div>
                        <div className='item-result positive'>
                            <KeyboardArrowUpOutlinedIcon />
                            <div className='result-amount'>$12.4k</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-title'>Last Week</div>
                        <div className='item-result negative'>
                            <KeyboardArrowDownIcon />
                            <div className='result-amount'>$12.4k</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-title'>Last Month</div>
                        <div className='item-result positive'>
                            <KeyboardArrowUpOutlinedIcon />
                            <div className='result-amount'>$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
