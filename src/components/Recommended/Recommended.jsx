import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { API_KEY } from '../../data';
import { value_converter } from '../../data';

function Recommended({ categoryId }) { // Destructure categoryId from props

   const [apidata, setApidata] = useState([]);

   const fetchData = async () => {
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;

      try {
         const response = await fetch(relatedVideo_url);
         const data = await response.json();
         setApidata(data.items || []); // Ensure apidata is always an array
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   useEffect(() => {
      fetchData();
   }, [categoryId]); // Add categoryId as a dependency to re-fetch data if it changes

   return (
      <div className='recommended'>
         {apidata.map((item, index) => (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
               <img src={item.snippet.thumbnails.medium.url} alt="" />
               <div className="vid-info">
                  <h4>{item.snippet?.title || 'Title'}</h4> {/* Use data from item */}
                  <p>{item.snippet?.channelTitle || 'Channel Name'}</p>
                  <p>{value_converter(item.statistics?.viewCount) || '0'} Views</p>
               </div>
            </Link>
         ))}
      </div>
   );
}

export default Recommended;
