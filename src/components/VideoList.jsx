import React from 'react';
import Video  from "./Video";

export default function VideoList({props}){
    console.log('hhh')
  
    
    return props.map(item => 
        <Video key={item.url} url={item.url} date={item.date} />
      );
    }


