"use client"
import ChatLeft, { ChatRight } from "@/components/chat/chat";
import ChatListItem from "@/components/chat/chat-list-item";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChatCategories, MyContacts } from "@/static/contacts";
import { EllipsisVertical, Paperclip, Search, SendHorizonal, Smile } from "lucide-react";
import Image from "next/image";


import { Splitter, SplitterPanel } from 'primereact/splitter';
import { ScrollPanel } from 'primereact/scrollpanel';

import { useState } from "react";


export default function Chat() {

    const [isSearch, setIsSearch] = useState(false);
    const [height, setHeight] = useState('40px');

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = 'auto';  // Reset the height
        e.target.style.height = `${e.target.scrollHeight}px`;  // Set the new height
    };
    

    return (
        <div className="" >


            <div className="desktop:hidden tab:hidden mid:flex">
                <div className="w-full box-border ">

                    <div className="fixed top-0 w-full z-[1000] bg-[#0000001f] backdrop-blur-sm">
                        <div className="flex flex-col  py-3 px-4 mt-2 border-b border-[#ffffff1f]">
                            <div className="flex items-center justify-between">
                                <a href="/"><div className="text-2xl font-bold  ">Robin.</div></a>
                                <div className="flex gap-4">
                                    <div onClick={() => setIsSearch((prev) => !prev)}>
                                        <Search size={21} />
                                    </div>
                                    <EllipsisVertical size={21} />
                                </div>
                            </div>

                            {isSearch &&
                                <div className="  pb-2 pt-4 ">
                                    <input type="search" placeholder="Find User" className="w-full h-[50px] border rounded-full  border-[#ffffff1f] text-[1rem] bg-[#131313] font-medium px-[16px]" />
                                </div>}
                        </div>
                    </div>



                </div>

                <div className={`"flex flex-col ${isSearch ? "mt-[150px]" : "mt-[78px]"}`}>

                    <div className=" flex gap-2 px-4 mt-4 mb-4">
                        {ChatCategories.map((data, key) => (
                            <div key={key} className="bg-[#131313] w-fit px-4 py-2 border rounded-full border-[#ffffff1f]">
                                {data.name}
                            </div>
                        ))}
                    </div>

                    {MyContacts.map((data, key) => (
                        <ChatListItem key={key} chat={data.chats} name={data.name} username={data.username} />
                    ))}


                </div>

            </div>

            <Splitter style={{ minHeight: '100vh' }} className="mobile:hidden mid:hidden tab:flex " gutterSize={0.5}>
                {/* LEFT */}
                <SplitterPanel className="flex align-items-center justify-content-center  max-w-[400px] border-r-2 border-[#ffffff1f] " size={25} minSize={10} >
                    <div className="w-full">
                        <ScrollPanel style={{ width: '100%', height: '100vh' }}>
                            <div className="w-full box-border ">

                                <div className=" w-full z-[1000] bg-[#0000001f] backdrop-blur-sm pt-2">
                                    <div className="flex flex-col pb-[14px]  py-3 px-4  border-b border-[#ffffff1f]">
                                        <div className="flex items-center justify-between">
                                            <a href="/"><div className="text-2xl font-bold  ">Robin.</div></a>
                                            <div className="flex gap-4">
                                                <div onClick={() => setIsSearch((prev) => !prev)}>
                                                    <Search size={21} />
                                                </div>
                                                <EllipsisVertical size={21} />
                                            </div>
                                        </div>

                                        {isSearch &&
                                            <div className="  pb-2 pt-4 ">
                                                <input type="search" placeholder="Find User" className="w-full h-[50px] border rounded-full  border-[#ffffff1f] text-[1rem] bg-[#131313] font-medium px-[16px]" />
                                            </div>}
                                    </div>
                                </div>



                            </div>

                            <div className={`flex flex-col w-full  "mt-[14px]`}>

                                <div className=" flex gap-2 px-4 mt-4 mb-4">
                                    {ChatCategories.map((data, key) => (
                                        <div key={key} className="bg-[#131313] w-fit px-4 py-2 border rounded-full border-[#ffffff1f]">
                                            {data.name}
                                        </div>
                                    ))}
                                </div>

                                {MyContacts.map((data, key) => (
                                    <ChatListItem key={key} chat={data.chats} name={data.name} username={data.username} />
                                ))}


                            </div>
                        </ScrollPanel>

                    </div>
                </SplitterPanel>

                {/* RIGHT */}
                <SplitterPanel className="flex align-items-center justify-content-center " size={75}>
                    <ScrollPanel style={{ width: '100%', height: '100vh' }} className="relative">

                        {/* TOP */}
                        <div className="flex items-center z-[2000] gap-4 box-border-2 w-full bg-[#131313] py-3 px-3 fixed top-0 border-b border-[#ffffff1f]">

                            <div className="w-[40px] h-[40px]  relative">
                                <Image src={'/profile.jpg'} alt="user" fill className="object-fill rounded-[6px]" loading="lazy" />
                            </div>

                            <div>
                                <div className="font-semibold">Nethmina Sandaruwan</div>
                                <div className="text-[12px]  text-lime-400">Online</div>
                            </div>

                        </div>

                        {/* CHATS */}
                        <div className="pt-[100px] pb-[120px] px-[16px]">
                            <div className="flex flex-col items-start gap-3">

                                <ChatLeft msg="Hello How are you!" />
                                <ChatLeft msg="Hello How are you!" />
                                <ChatLeft msg="Hello How are you!" />
                                <ChatLeft msg="Hello How are you!" />
                                <ChatLeft msg="Hello How are you!" />

                            </div>


                            {/* FROM CHAT - RIGHT */}
                            <div className="flex flex-col items-end gap-3">

                                <ChatRight msg="Hello How are you!" isSeen={true} />
                                <ChatRight msg="Hello How are you!" isSeen={true} />
                                <ChatRight msg="Hello How are you!" isSeen={true} />
                                <ChatRight msg="Hello How are you!" isSeen={false} />
                                <ChatRight msg="Hello How are you!" isSeen={false} />

                            </div>
                        </div>

                        {/* BOTTOM */}
                        <div className="absolute bottom-0 w-full ">
                            <div className="flex items-center gap-4 z-[2000] box-border-2 w-full bg-[#131313] pt-4 pb-6 px-6  border-t border-[#ffffff1f] ">

                                <div className="flex items-start w-full gap-6">
                                    <div className="flex items-center gap-6">
                                        <Smile className="opacity-80" />
                                        <Paperclip className="opacity-80" />
                                    </div>

                                    <div className="flex-1 flex gap-8 pr-[24px]">
                                        <textarea
                                            className=" bg-transparent border-none resize-none outline-none focus:outline-none w-full "
                                            placeholder="Type a message..."
                                            style={{ height, overflow: 'hidden' }}
                                            onInput={handleInput}
                                        
                                        />
                                        <SendHorizonal className="opacity-80" />
                                    </div>

                                </div>
                            </div>
                        </div>


                    </ScrollPanel>


                </SplitterPanel>
            </Splitter>

        </div >
    );
}
