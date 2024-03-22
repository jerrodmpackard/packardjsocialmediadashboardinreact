import React from 'react'

const BigCardComponent = (props: {
    topBar: string
    socialMediaIcon: string
    userName: string
    followerNumber: string
    caption: string
    arrowIcon: string
    value: string
    valueColor: string
}) => {
    return (
        <div>
            <div className='grid rounded-t rounded-lg bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesaturatedBlue hover:bg-slate-200 dark:hover:bg-slate-700 hover:cursor-pointer'>
                
                <div className={'h-1 ' + props.topBar}></div>
                
                <div className='flex justify-center items-center gap-2 pt-7 pb-5'>
                    <img src={props.socialMediaIcon} alt="Social media icon" />
                    <p className='font-bold text-xs text-lightMode-darkGrayishBlue dark:text-darkMode-desaturatedBlue'>{props.userName}</p>
                </div>

                <p className='flex justify-center text-[52px] font-bold text-lightMode-text dark:text-darkMode-text'>{props.followerNumber}</p>
                <p className='flex justify-center tracking-[0.3em] text-xs text-lightMode-darkGrayishBlue dark:text-darkMode-desaturatedBlue'>{props.caption}</p>

                <div className='flex justify-center items-center gap-2 pt-6 pb-7'>
                    <img src={props.arrowIcon} alt="Up or down arrow" />
                    <p className={'font-bold text-xs ' + props.valueColor}>{props.value}</p>
                </div>
            </div>
        </div>
    )
}

export default BigCardComponent
