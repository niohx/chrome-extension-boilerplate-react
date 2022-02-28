import React, { VFC } from "react";

const isSpotify=(url:string)=>{
    let isSpotify:boolean =((url:string)=>url.includes('https://open.spotify.com/track/'))(url)
    return isSpotify;
}

const SongWhipComponent:VFC=()=>{
    return <div>this is songwhip coddmponent</div>
}

export default SongWhipComponent;