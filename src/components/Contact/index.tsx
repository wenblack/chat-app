
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MessageProps {
    user: string
    imgUrl: string
    message: string
    hour: string
    count?: number
    status? : 'read'| 'unread'
    open?: boolean
}

export function Contact({count, hour,open, imgUrl, message, user, status}:MessageProps) {
    const [opened, setOpened] = useState(false)
    const [statusRead, setStatusRead] = useState('read'|| 'unread')

    function changeStatus(e:any){
        e.preventDefault()
        if(!open){
            setOpened(true)
        } else{
            setOpened(false)
        }
    }


    if(open){
        return <Link href={''} className="flex justify-between pr-4">
        <div className="flex gap-4" >
            <Image width={48} className="rounded-full" height={48} alt="User Image" src={imgUrl} />
            <div className="contact">
                <h3 className="text-zinc-100 font-semibold">{user}</h3>
                <p className="text-zinc-50 font-light text-sm">{message}</p>
            </div>
        </div>
        <div className="flex flex-col text-xs font-semibold justify-center items-center">
            <span className="text-zinc-50">{hour}</span>
        </div>
    </Link>
    }
    
    if(status ==='read'){
        return <Link href={''} className="flex justify-between  pr-4">
        <div className="flex gap-4" >
            <Image width={48} className="rounded-full" height={48} alt="User Image" src={imgUrl} />
            <div className="contact">
                <h3 className="text-gray-400 font-semibold">{user}</h3>
                <p className="text-gray-400 font-light text-sm">{message}</p>
            </div>
        </div>
        <div className="flex flex-col text-xs font-semibold justify-center items-center">
            <span className="text-gray-400">{hour}</span>
        </div>
    </Link>
    

    }
    return <Link  href={''} className="flex justify-between pr-4">
        <div className="flex gap-4">
            <Image width={48} className="rounded-full" height={48} alt="User Image" src={imgUrl} />
            <div className="contact">
                <h3 className="font-semibold">{user}</h3>
                <p className="text-sm ">{message}</p>
            </div>
        </div>
        <div className="flex flex-col gap-1 text-sm font-bold justify-center">
            <span className="text-green-400">{hour}</span>
            <span className="text-center self-end w-5 text-green-500 bg-green-800 rounded-lg">{count}</span>
        </div>
    </Link>
    
}