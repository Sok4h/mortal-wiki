import * as React from 'react';
import './Banner.css'

interface BannerProps {
  name: string;
  img:string;
}

const Banner: React.FC<BannerProps> = ({name,img }) => {
  
  return <div className="bannerContainer">

      <img src={img} className="bannerImage" />
      
  </div>;
}

export default Banner;