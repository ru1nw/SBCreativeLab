import React from 'react'
import './Speakers.css'
// import useWindowDimensions from '../../utils/useWindowDimensions'

import bergerj from '../../images/s24_images/speakers/bergerj.png'
import hor from '../../images/s24_images/speakers/hor.png'
import leef from '../../images/s24_images/speakers/leef.png'
import lottie from '../../images/s24_images/speakers/lottie.png'
import millarh from '../../images/s24_images/speakers/millarh.png'
import xuej from '../../images/s24_images/speakers/xuej.png'

function SpeakersSection(props) {
    return (
        <div className='speakers-section'>
            <div className={`speakers-header speakers-header-${props.headerColor ?? props.color}`}>{props.title}</div>
            <div className={'speakers-row'}>
            {
                props.speakers.map(speaker => {
                    return <SpeakersCell
                        img={speaker.image}
                        name={speaker.name}
                        pronouns={speaker.pronouns}
                        position={speaker.position}
                        company={speaker.company}
                        workshop={speaker.workshop}
                        color={props.color}
                        textColor={props.textColor} 
                    />
                })
            }
            </div>
        </div>
    )
}

function SpeakersCell(props) {
    return (
        <div className={'speakers-cell'}>
            <img className={`speakers-profile speakers-profile-${props.color}`} src={props.img} alt={props.name} />
            <div className={`speakers-desc speakers-desc-${props.color}`}>
                <div className={`speakers-name speakers-text-${props.textColor}`}>{props.name}</div>
                <div className={`speakers-info speakers-text-${props.textColor}`}>{props.pronouns}</div>
                {props.company ?
                    <>
                        <div className={`speakers-info speakers-text-${props.textColor}`}>[{props.position}</div>
                        <div className={`speakers-info speakers-text-${props.textColor}`}>{`@ ${props.company}`}]</div>
                    </>
                    :
                    <div className={`speakers-workshop speakers-text-${props.textColor}`}>{`Workshop: ${props.workshop}`}</div>
                }
            </div>
        </div>
    )
}

export default function Speakers() {
    // const { width } = useWindowDimensions();
    // const PHONE_SCREEN_BREAKPOINT = 600;
    // const isPhoneScreen = width <= PHONE_SCREEN_BREAKPOINT;

    return (
        <div className='speakers' id='speakers'>
            <div className='speakers-background'/>
            <div className='speakers-frame'>
                <SpeakersSection title={'Keynote Speaker'} color={'teal'} textColor={'dark'}
                    speakers={[
                        {image: leef, name: "Felix Lee", pronouns: "He/Him", position: "Co-founder & CEO", company: "ADP List"}
                    ]}
                />
                <SpeakersSection title={'Judges'} color={'blue'} textColor={'light'}
                    speakers={[
                        {image: bergerj, name: "Jason Berger", pronouns: "He/Him", position: "Senior Product Designer", company: "Betterhelp"},
                        {image: hor, name: "Raven Ho", pronouns: "She/Her", position: "UX Designer", company: "Precisely"},
                        {image: xuej, name: "Janny Xue", pronouns: "She/Her", position: "UX Designer", company: "Riot Games"},
                        {image: millarh, name: "Hannah Millar", pronouns: "She/Her", position: "Associate Product Designer", company: "Betterhelp"}
                    ]}
                />
                <SpeakersSection title={'Workshop Hosts'} color={'purple'} textColor={'light'} headerColor={'pink'}
                    speakers={[
                        {image: millarh, name: "Hannah Millar", pronouns: "She/Her", workshop: "User Research"},
                        {image: lottie, name: "Lottie Files", pronouns: "Very cool company", workshop: "Motion Design 101"}
                    ]}
                />
            </div>
        </div>
    )
}