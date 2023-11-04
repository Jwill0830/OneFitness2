import React, { useState } from 'react';

const ContentItem = ({ content, onLike, onShare, onRank, onComment }) => {
  const [commentText, setCommentText] = useState('');

  // Placeholder function for social media sharing
  const shareOnSocialMedia = (platform, contentId) => {
    // Logic to share on the specified platform
    onShare(contentId);
  };

  // Render stars based on the current ranking
  const renderStars = (currentRank) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} onClick={() => onRank(content.id, i)}>
          {i <= currentRank ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="content-item">
      <video width="320" height="240" controls>
        <source src={content.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{content.description}</p>
      <div>
        <button onClick={() => onLike(content.id)}>Like</button>
        {/* Placeholder buttons for social media sharing */}
        <button onClick={() => shareOnSocialMedia('facebook', content.id)}>Share on Facebook</button>
        <button onClick={() => shareOnSocialMedia('twitter', content.id)}>Share on Twitter</button>
        {/* Star ranking */}
        <div>{renderStars(content.rank)}</div>
        {/* Comments section */}
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={() => {
          onComment(content.id, commentText);
          setCommentText(''); // Clear the input after submitting
        }}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default ContentItem;
