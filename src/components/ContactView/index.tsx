import { useState } from "react";
import { Contact } from "../Contact";

export function ContactView() {
    return (
        <section className=" w-full md:max-w-sm  text-gray-400 contacts pt-44 h-full flex flex-col py-10 px-4 gap-12">
            <ul>
                <li className="pb-4  text-zinc-50" >
                    <Contact 
                        imgUrl="https://randomuser.me/api/portraits/men/5.jpg"
                        hour="11:57"
                        message="E aí? Você Vai?"
                        user="Abraão "
                        count={1}
                    />
                    
                </li>

                <li className="py-4 border-t  border-zinc-700">  
                    <Contact 
                        hour="11:30"
                        imgUrl="https://randomuser.me/api/portraits/women/5.jpg"
                        user="Bia"
                        message="Consulta agendada, com sucesso!"
                        status="read"
                        open
                    />
                </li>
                <li className="py-4 border-t border-zinc-700 ">
                <Contact 
                        hour="11:00"
                        imgUrl="https://randomuser.me/api/portraits/women/6.jpg"
                        user="Crush ❤"
                        message="Nos falamos mais depois"
                        status="read"
                    />
                </li>
                <li className="py-4 border-t border-zinc-700">
                <Contact 
                        hour="10:30"
                        imgUrl="https://randomuser.me/api/portraits/men/7.jpg"
                        user="Boss"
                        message="Não esqueça da nossa reuinião amanhã!"
                        status="read"
                    />
                </li>
                <li className="py-4 border-t border-zinc-700">
                <Contact 
                        hour="10:00"
                        imgUrl="https://randomuser.me/api/portraits/men/25.jpg"
                        user="Brother"
                        message="kkkkk"
                        status="read"
                    />
                </li>
            </ul>
        </section>
    )
}