// ContentDisplay.js
import React from 'react';
import ContentItem from './ContentItem'; // This will be a new component for individual content items

const ContentDisplay = ({ contentItems, onLike, onShare, onRank, onComment }) => {
  return (
    <div>
      {contentItems.map((item) => (
        <ContentItem
          key={item.id}
          content={item}
          onLike={onLike}
          onShare={onShare}
          onRank={onRank}
          onComment={onComment}
        />
      ))}
    </div>
  );
};

export default ContentDisplay;
