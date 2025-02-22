import { useState } from "react";
import ChatItems from "../components/chatitems";
import Chat from "../components/chatMessage";
import ChatContent from "../components/chatsContent";
import Sidebar from "../components/sidebar";

export default function Main(){
    const [chatId, setChatId]=useState(null)

    return(
        <>
           <div style={{display:"flex"}}>
              <Sidebar/>
              <ChatItems/>
              {
                chatId==null?<ChatContent/>:<Chat/>
              }
              
              {/* <ChatContent/> */}
              {/* <Chat/> */}
           </div>
        </>
    )
}