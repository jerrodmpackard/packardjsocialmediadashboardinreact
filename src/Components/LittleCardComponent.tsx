import React from 'react'

const LittleCardComponent = (props: {
    title: string
    socialMediaIcon: string
    value1: string
    arrowIcon: string
    value2: string
    value2Color: string
}) => {
    return (
        <div className='container grid rounded-lg bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesaturatedBlue hover:bg-slate-200 dark:hover:bg-slate-700 hover:cursor-pointer'>
            <div className='flex items-center justify-between pt-6 pl-6 pr-7'>
                <p className='font-bold text-sm text-lightMode-darkGrayishBlue dark:text-darkMode-desaturatedBlue'>{props.title}</p>
                <img src={props.socialMediaIcon} alt="Social media icon" />
            </div>

            <div className='flex justify-between items-end pt-5 pl-6 pr-7 pb-6'>
                <p className='text-3xl font-bold text-lightMode-text dark:text-darkMode-text'>{props.value1}</p>

                <div className='flex justify-center items-center gap-1'>
                    <img src={props.arrowIcon} alt="Up or down arrow" />
                    <p className={'font-bold text-xs ' + props.value2Color}>{props.value2}</p>
                </div>
            </div>
        </div>
    )
}

export default LittleCardComponent
