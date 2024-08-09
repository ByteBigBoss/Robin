import React from 'react'

export const ContentWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <div className='w-full mt-[60px] min-h-screen flex wide:flex-row desktop:flex-row mid:flex-col mobile:flex-col'>
      {children}
    </div>
  )
}

export const Sidebar = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
   <aside className='w-2/12 bg-red-50 mid:w-full mobile:w-full'>
    {children}
   </aside>
  )
}

export const SidebarItem = ({children,}: Readonly<{children: React.ReactNode;}>)=>{
    return (
        <div className=''>
            {children}
        </div>
    );
};

export const MiddleContent = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
   <div className='w-8/12 bg-green-400 mid:w-full mobile:w-full'>
    {children}
   </div>
  )
}

export const RightSidebar = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
   <div className='w-2/12 bg-blue-400 mid:w-full mobile:w-full'>
    {children}
   </div>
  )
}
