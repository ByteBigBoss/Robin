import Image from 'next/image'
import React from 'react'


const ChatListItem = ({chat,name,username}:ChatListProps) => {
    return (
        <div className='w-full  border-black   box-border  hover:bg-[#ffffff1f] cursor-pointer'>
           <div className='py-4 px-4  gap-4 flex'>
           <div className="w-[48px] h-[48px]  relative">
                <Image src={'/profile.jpg'} alt="user" fill className="object-fill rounded-full" loading="lazy" />
            </div>

            <div className='flex flex-col items-start flex-1'>

                <div className='text-[18px] font-bold'>{name}</div>
                <div className='flex items-center justify-between w-full'>
                    <div className='text-[14px] font-medium line-clamp-1 text-nowrap opacity-80'>{chat[0].msg}</div>
                    <div className='text-[12px] font-semibold'>{chat[0].time}</div>
                </div>

            </div>
           </div>
        </div>
    )
}

export default ChatListItem
