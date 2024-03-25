import React from 'react'
import './Judges.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import judgesHeaderDeco from '../../images/s23_images/judges-header-deco.svg'
import judgesHeader from '../../images/s23_images/judges-header.svg'
import vu from '../../images/s23_images/judges/vu.png'
import huang from '../../images/s23_images/judges/huang.png'
import dizon from '../../images/s23_images/judges/dizon.png'

function JudgesCell(props) {
    return (
        <div className={'judges-cell ' + props.class}>
            <img src={props.img} alt={props.name} />
            <div className='judges-desc'>
                <p className='judges-name'>{props.name}</p>
                {props.company ?
                    <p className='judges-position'>
                        [{props.position}<br/>
                        @ {props.company}]
                    </p>
                    :
                    <p className='judges-position'>
                        [{props.position}]
                    </p>
                }
            </div>
        </div>
    )
}

export default function Judges() {
    const { width } = useWindowDimensions();
    const PHONE_SCREEN_BREAKPOINT = 600;
    const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;

    return (
        <div className='judges' id='judges'>
            <div className='judges-background'/>
            {isPhoneScreen ?
                <div className='judges-frame'>
                    <div className='judges-header'>
                        <img src={judgesHeaderDeco} alt='' />
                        <img src={judgesHeader} alt='judges' />
                    </div>
                    <div className='judges-grid'>
                        <JudgesCell class='judges-cell-right' company='PoolUp' img={vu} name='Priscilla Vu' position='Product Designer'/>
                        <JudgesCell class='judges-cell-left' company='Internet Brands' img={huang} name='Eve Huang' position='Associate Product Designer'/>
                        <JudgesCell class='judges-cell-right' company='Disney Streaming' img={dizon} name='Jeremy Dizon' position='Lead Product Designer'/>
                    </div>
                </div>
                :
                <div className='judges-frame'>
                    <div className='judges-header'>
                        <img src={judgesHeaderDeco} alt='' />
                        <img src={judgesHeader} alt='judges' />
                    </div>
                    <div className='judges-grid'>
                        <JudgesCell class='judges-cell-1' company='PoolUp' img={vu} name='Priscilla Vu' position='Product Designer'/>
                        <JudgesCell class='judges-cell-2' company='Internet Brands' img={huang} name='Eve Huang' position='Associate Product Designer'/>
                        <JudgesCell class='judges-cell-3' company='Disney Streaming' img={dizon} name='Jeremy Dizon' position='Lead Product Designer'/>
                    </div>
                </div>
            }
        </div>
    )
}