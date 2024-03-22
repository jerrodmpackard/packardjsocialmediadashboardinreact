import React, { useEffect, useState } from 'react'
import '../App.css';
import BigCardComponent from './BigCardComponent'
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Instagram from '../images/icon-instagram.svg'
import Youtube from '../images/icon-youtube.svg'
import UpArrow from '../images/icon-up.svg'
import DownArrow from '../images/icon-down.svg'
import LittleCardComponent from './LittleCardComponent'

const HomeComponent = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            console.log('darkmode')
        } else {
            document.documentElement.classList.remove("dark");
            console.log('light')
        }
    }, [darkMode]);

    const themeHandler = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className='bg-lightMode-whiteBg dark:bg-darkMode-veryDarkBlueBg'>
            <div className='bg-lightMode-veryPaleBlueTop dark:bg-darkMode-veryDarkBlueBgTop w-full h-60 absolute z-0 rounded-b-lg'></div>

            <div className='min-h-screen lg:px-40 px-7 z-10 relative'>
                <div className='md:flex md:justify-between mx-auto pt-9 pb-10 md:pb-12'>
                    <div className=''>
                        <h3 className='lg:text-3xl text-2xl font-bold text-lightMode-text dark:text-darkMode-text'>Social Media Dashboard</h3>
                        <p className='text-lightMode-darkGrayishBlue dark:text-darkMode-desaturatedBlue'>Total Followers: 23,004</p>
                    </div>

                    <div className='md:hidden pt-5 pb-4'>
                        <hr className='' />
                    </div>

                    <div className='flex items-center justify-between'>
                        <label htmlFor="checkbox" className="font-bold text-lightMode-darkGrayishBlue dark:text-darkMode-desaturatedBlue text-sm cursor-pointer md:pr-0">Dark Mode</label>
                        <input type="checkbox" className="checkbox" id="checkbox" checked={!darkMode} onClick={themeHandler} />
                        <label htmlFor="checkbox" className="label">
                            <div className="ball"></div>
                        </label>
                    </div>

                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 container gap-7 mx-auto'>
                    <BigCardComponent topBar='facebook' socialMediaIcon={Facebook} userName='@nathanf' followerNumber='1987' caption='FOLLOWERS' arrowIcon={UpArrow} value='12 Today' valueColor='text-main-limeGreen' />
                    <BigCardComponent topBar='twitter' socialMediaIcon={Twitter} userName='@nathanf' followerNumber='1044' caption='FOLLOWERS' arrowIcon={UpArrow} value='99 Today' valueColor='text-main-limeGreen' />
                    <BigCardComponent topBar='instagram' socialMediaIcon={Instagram} userName='@realnathanf' followerNumber='11k' caption='FOLLOWERS' arrowIcon={UpArrow} value='1099 Today' valueColor='text-main-limeGreen' />
                    <BigCardComponent topBar='youtube' socialMediaIcon={Youtube} userName='Nathan F.' followerNumber='8239' caption='SUBSCRIBERS' arrowIcon={DownArrow} value='144 Today' valueColor='text-main-brightRed' />
                </div>

                <div className='grid grid-cols-4 container gap-7 mx-auto pt-12 pb-7'>
                    <div className='col-span-4'>
                        <h3 className='text-2xl font-bold text-lightMode-text dark:text-darkMode-text'>Overview - Today</h3>
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 container gap-7 mx-auto pb-12'>
                    <LittleCardComponent title='Page Views' socialMediaIcon={Facebook} value1='87' arrowIcon={UpArrow} value2='3%' value2Color='text-main-limeGreen' />
                    <LittleCardComponent title='Likes' socialMediaIcon={Facebook} value1='52' arrowIcon={DownArrow} value2='2%' value2Color='text-main-brightRed' />
                    <LittleCardComponent title='Likes' socialMediaIcon={Instagram} value1='5462' arrowIcon={UpArrow} value2='2257%' value2Color='text-main-limeGreen' />
                    <LittleCardComponent title='Profile Views' socialMediaIcon={Instagram} value1='52k' arrowIcon={UpArrow} value2='1375%' value2Color='text-main-limeGreen' />
                    <LittleCardComponent title='Retweets' socialMediaIcon={Twitter} value1='117' arrowIcon={UpArrow} value2='303%' value2Color='text-main-limeGreen' />
                    <LittleCardComponent title='Likes' socialMediaIcon={Twitter} value1='507' arrowIcon={UpArrow} value2='553%' value2Color='text-main-limeGreen' />
                    <LittleCardComponent title='Likes' socialMediaIcon={Youtube} value1='107' arrowIcon={DownArrow} value2='19%' value2Color='text-main-brightRed' />
                    <LittleCardComponent title='Total Views' socialMediaIcon={Youtube} value1='1407' arrowIcon={DownArrow} value2='12%' value2Color='text-main-brightRed' />
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
