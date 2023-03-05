import React from "react";
import Style from "./Post.module.css"

const Post = ()=>{
    return(
        <div className={Style.post}>
            <div className={Style.item}>
                <img src="http://placehold.it/70x70"></img>
                <p className={Style.postText}>Hello world</p>
            </div>
        </div> 
    )
}

export default Post