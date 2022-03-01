import { CopyOutlined } from "@ant-design/icons";
import { Button, Spin } from "antd";
import React, { VFC } from "react";
import useSongWhip from "./useSongWhip";



const SongWhipComponent:VFC=()=>{
    const [status,data,]=useSongWhip();
    console.log('status is',status);
    if(status ==="loading"){
        return <Spin/>
    }
    if(status==="success"){
        return <div>{data?.url}<br/><Button icon={<CopyOutlined />} onClick={()=>{
            navigator.clipboard.writeText(data?.url);
        }}/></div>
    }
    
    return <div>if the url is Spotify URL , Url will occur here.</div>
}

export default SongWhipComponent;