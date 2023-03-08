import { useState } from 'react';
import Style from './Profile.module.css'
import Post from './Posts/Post';

const Profile = ()=>{
    return(
        <div className={Style.content}>
            <div className={Style.bannerContainer}>
            <img src="http://placehold.it/850x150" className={Style.banner}/>
            </div>
            <div className={Style.mainInfo}>
              <img src="http://placehold.it/175x165" alt="" />
              <div className={Style.mainText}>
                <h1 className={Style.name}>Khramenok Kirill</h1>
                <p className={`${Style.text} ${Style.birthday}`}>#</p>
                <p className={`${Style.text} ${Style.city}`}>#</p>
                <p className={`${Style.text} ${Style.education}`}>#</p>
                <p className={`${Style.text} ${Style.webSite}`}>#</p>
              </div>
            </div>
            <div>
                <div className={Style.textInputContainer}>
                  <textarea placeholder='You news...' className={Style.textInput}></textarea>
                  <div className={Style.btnContainer}>
                    <input type="submit" name='Send' value='Send' className={Style.btn}/>
                  </div>
                </div>
            </div>
            <div className={Style.postHeadingContainer}>
              <h1 className={Style.postHeading}>My posts</h1>
            </div>
            <Post message = "Nihao"/>
            <Post message = "How are you?"/>
        </div> 
    )
}

export default Profile