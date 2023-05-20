import React from 'react'
import RatingStar from './RatingStar'

function CommentCard({comment}) {
    return (
        <div className="comment-card">
            <div className="user">
                <div className="user-img">
                    <img src={comment.user_img} alt="user-img" />
                </div>
                <RatingStar star={comment.star} />
            </div>
            <div className="comment">
                <p>{comment.text}</p>
            </div>
        </div>
    )
}

export default CommentCard
