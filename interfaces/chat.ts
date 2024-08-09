interface Chat{
    msg: string;
    from: string;
    to:string;
    date: string;
    time: string;
}

interface ChatListProps{
    username:string;
    name:string;
    chat: Chat[];
}
