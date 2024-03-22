import React from 'react'

const BigCardComponent = (props: {
    socialMediaIcon: string
    userName: string
    followerNumber: string
    caption: string
    arrowIcon: string
    value: string
}) => {
    return (
        <div>
            <div className='container grid justify-center rounded-lg bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesaturatedBlue hover:bg-slate-200 dark:hover:bg-slate-700 hover:cursor-pointer'>
                <div className='flex justify-center items-center gap-2 pt-7 pb-6'>
                    <img src={props.socialMediaIcon} alt="Social media icon" />
                    <p className='font-bold text-lightMode-darkGrayishBlue dark:text-darkMode-desaturatedBlue'>{props.userName}</p>
                </div>

                <p className='flex justify-center text-[52px] font-bold pb-3 text-lightMode-text dark:text-darkMode-text'>{props.followerNumber}</p>
                <p className='flex justify-center tracking-[0.3em] text-lightMode-darkGrayishBlue dark:text-darkMode-desaturatedBlue'>{props.caption}</p>

                <div className='flex justify-center items-center gap-2 pt-6 pb-7'>
                    <img src={props.arrowIcon} alt="Up or down arrow" />
                    <p>{props.value}</p>
                </div>
            </div>
        </div>
    )
}

export default BigCardComponent
