import { useState } from "react";
import Call from "../components/call";
import CallContent from "../components/callContent";
import CallItems from "../components/callitem";
import Sidebar from "../components/sidebar";

export default function Calls() {
    const [callId, setCallId] = useState(null)
    return (
        <>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <CallItems />
                {
                    callId == null ?  <CallContent/> : <Call />
                }
        
                
            </div>
        </>
    )
}