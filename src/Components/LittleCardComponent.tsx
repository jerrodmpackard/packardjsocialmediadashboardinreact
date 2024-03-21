import React from 'react'

const LittleCardComponent = (props: {
    title: string
    socialMediaIcon: string
    value1: string
    arrowIcon: string
    value2: string
}) => {
    return (
        <div className='container grid'>
            <div className='flex items-center justify-between pt-6 pl-6 pr-7'>
                <p className='font-bold text-sm'>{props.title}</p>
                <img src={props.socialMediaIcon} alt="Social media icon" />
            </div>

            <div className='flex justify-between items-end pt-5 pl-6 pr-7'>
                <p className='text-3xl font-bold'>{props.value1}</p>

                <div className='flex justify-center items-center'>
                    <img src={props.arrowIcon} alt="Up or down arrow" />
                    <p className=''>{props.value2}</p>
                </div>
            </div>
        </div>
    )
}

export default LittleCardComponent
