import { CheckCheck } from 'lucide-react'
import React from 'react'

interface leftMsgProps {
    msg: string
}

interface RightMsgProps {
    msg: string;
    isSeen: boolean;
}

const ChatLeft = ({ msg }: leftMsgProps) => {
    return (

        <div className='px-4 py-2 bg-[#0e1116] border-2 border-[#ffffff1f] rounded-full flex gap-2 items-end'>
            <p className='text-[14px]'> {msg}</p>

            <span className='text-[10px] opacity-80 font-mono flex items-center gap-1'>22:30</span>
        </div>

    )
}

export default ChatLeft


export const ChatRight = ({ msg, isSeen }: RightMsgProps) => {
    return (
        <div className='border-2 border-[#ffffff1f] rounded-full'>
            <div className='px-4 py-2 from-teal-500 to-lime-500 bg-gradient-to-r  rounded-full flex gap-2 items-end'>
                <p className='text-[14px]'> {msg}</p>

                <span className='text-[10px] opacity-80 font-mono flex items-center gap-1'>22:30 <CheckCheck size={14} className={`${isSeen?"text-lime-700":"text-lime-50"}`} /></span>
            </div>
        </div>
    )
}
