import React, { useState } from 'react'
import BigCardComponent from './BigCardComponent'
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Instagram from '../images/icon-instagram.svg'
import Youtube from '../images/icon-youtube.svg'
import UpArrow from '../images/icon-up.svg'
import DownArrow from '../images/icon-down.svg'
import LittleCardComponent from './LittleCardComponent'
import { ToggleSwitch } from 'flowbite-react'

const HomeComponent = () => {

    const [switch1, setSwitch1] = useState(false);

    return (
        <div className='grid grid-cols-4 container gap-7 mx-auto pt-10'>
            <div className='col-span-2'>
                <h3>Social Media Dashboard</h3>
                <p>Total Followers: 23,004</p>
            </div>
            <div className='lg:col-span-2 sm:col-span-4 grid justify-end'>
                <div>
                    <ToggleSwitch checked={switch1} label="Dark Mode" onChange={setSwitch1} />
                </div>
            </div>
            <BigCardComponent socialMediaIcon={Facebook} userName='@nathanf' followerNumber='1987' caption='FOLLOWERS' arrowIcon={UpArrow} value='12 Today' />
            <BigCardComponent socialMediaIcon={Twitter} userName='@nathanf' followerNumber='1044' caption='FOLLOWERS' arrowIcon={UpArrow} value='99 Today' />
            <BigCardComponent socialMediaIcon={Instagram} userName='@realnathanf' followerNumber='11k' caption='FOLLOWERS' arrowIcon={UpArrow} value='1099 Today' />
            <BigCardComponent socialMediaIcon={Youtube} userName='Nathan F.' followerNumber='8239' caption='SUBSCRIBERS' arrowIcon={DownArrow} value='144 Today' />

            <div className='col-span-4'>
                <h3>Overview - Today</h3>
            </div>

            <LittleCardComponent title='Page Views' socialMediaIcon={Facebook} value1='87' arrowIcon={UpArrow} value2='3%' />
            <LittleCardComponent title='Likes' socialMediaIcon={Facebook} value1='52' arrowIcon={DownArrow} value2='2%' />
            <LittleCardComponent title='Likes' socialMediaIcon={Instagram} value1='5462' arrowIcon={UpArrow} value2='2257%' />
            <LittleCardComponent title='Profile Views' socialMediaIcon={Instagram} value1='52k' arrowIcon={UpArrow} value2='1375%' />
            <LittleCardComponent title='Retweets' socialMediaIcon={Twitter} value1='117' arrowIcon={UpArrow} value2='303%' />
            <LittleCardComponent title='Likes' socialMediaIcon={Twitter} value1='507' arrowIcon={UpArrow} value2='553%' />
            <LittleCardComponent title='Likes' socialMediaIcon={Youtube} value1='107' arrowIcon={DownArrow} value2='19%' />
            <LittleCardComponent title='Total Views' socialMediaIcon={Youtube} value1='1407' arrowIcon={DownArrow} value2='12%' />
        </div>
    )
}

export default HomeComponent
