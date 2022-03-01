import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState, VFC } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import icon from '../../assets/img/icon-128.png';
import './Popup.css';
import SongWhipComponent from './SongWhipComponent';
import useSongWhip from './useSongWhip';

const Popup:VFC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [clip, setClip] = useState<string>()
  const [,,setTargetUrl]=useSongWhip();
  useEffect(()=>{
    if(ref!=null){
      ref!.current!.focus();
      document.execCommand('paste');
      const data = ref!.current!.value;
      console.log('data is',data)
      setClip(data);
    }
    
  },[]);
  return (
    <div className="App">
        <img src={icon} style={{height:"100px" }}/>
        <p>
         Please Paste Spotify, Apple Music Links Here!
        </p>
        <input ref={ref} hidden={false}/> <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={()=>setTargetUrl(clip!)}/>
        <div style={{padding:"20px"}}><SongWhipComponent/></div>
      
    </div>
  );
};

export default Popup;
