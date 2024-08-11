import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

function PlayVideo() {

   const { videoId } = useParams()
   const [apidata, setApidata] = useState(null)

   const [channelData, setChannelData] = useState(null)

   const [commentData, setCommentData] = useState([])

   // console.log(apidata)

   const fetchingVideoData = async () => {

      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

      await fetch(videoDetails_url).then((res) => res.json()).then(data => setApidata(data.items[0]));

      // const res = await fetch(videoDetails_url);
      // let data = await res.json();

      // data = setApidata(data.item[0])
      // console.log(data)
   }

   const fetchingChannelData = async () => {

      // fetching channel data 
      const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key= ${API_KEY}`

      await fetch(channelDetails_url).then((res) => res.json()).then(data => setChannelData(data.items[0]));


      // fetching comment data
      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`

      await fetch(comment_url).then((res) => res.json()).then(data => setCommentData(data.items))
   }

   useEffect(() => {
      fetchingVideoData();
   }, [videoId])

   useEffect(() => {
      console.log(fetchingChannelData())
   }, [apidata])
   return (


      <>
         <div className="play-video">
            {/* <video src={video1} controls autoPlay></video> */}

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" ></iframe>
            <h3>{apidata ? apidata.snippet.title : "Title Here"}</h3>
            <div className='play-video-info'>

               <p>{apidata ? value_converter(apidata.statistics.viewCount) : "16Ks"} Views &bull;  {apidata ? moment(apidata.snippet.publishedAt).fromNow() : ""}</p>
               <div>
                  <span><img src={like} alt="" />{apidata ? value_converter(apidata.statistics.likeCount) : 155}</span>
                  <span><img src={dislike} alt="" /></span>
                  <span><img src={share} alt="" /></span>
                  <span><img src={save} alt="" /></span>
               </div>
            </div>

            <hr />
            <div className='publisher'>
               <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
               <div>
                  <p>{apidata ? apidata.snippet.channelTitle : ""}</p>
                  <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : ""} Subscriber</span>
               </div>
               <button>Subscriber</button>

            </div>

            <div className="vid-description">
               <p>{apidata ? apidata.snippet.description.slice(0, 250) : "Description Here"}</p>
               <hr />


               <h4>{apidata ? value_converter(apidata.statistics.commentCount) : 102} Comment</h4>


               {commentData.map((item, index) => {



                  return (

                     <div key={index} className="comment">


                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                           <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} </h3>
                           <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>

                           <div className="comment-action">
                              <img src={like} alt="" />
                              <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                              <img src={dislike} alt="" />
                           </div>
                        </div>
                     </div>

                  )

               })}






            </div>
         </div>





      </>
   )
}

export default PlayVideo
