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
            <div className='container grid justify-center'>
                <div className='flex justify-center items-center gap-2 pt-7 pb-6'>
                    <img src={props.socialMediaIcon} alt="Social media icon" />
                    <p>{props.userName}</p>
                </div>

                <p className='flex justify-center text-5xl font-bold pb-3'>{props.followerNumber}</p>
                <p className='flex justify-center tracking-[0.3em]'>{props.caption}</p>

                <div className='flex justify-center items-center gap-2 pt-6 pb-7'>
                    <img src={props.arrowIcon} alt="Up or down arrow" />
                    <p>{props.value}</p>
                </div>
            </div>
        </div>
    )
}

export default BigCardComponent
