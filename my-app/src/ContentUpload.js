// ContentUpload.js
import React, { useState } from 'react';

const ContentUpload = ({ onContentSubmit }) => {
  const [contentData, setContentData] = useState({
    videoUrl: '',
    description: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onContentSubmit(contentData);
    setContentData({ videoUrl: '', description: '', category: '' }); // Reset the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Video URL"
        value={contentData.videoUrl}
        onChange={(e) => setContentData({ ...contentData, videoUrl: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={contentData.description}
        onChange={(e) => setContentData({ ...contentData, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={contentData.category}
        onChange={(e) => setContentData({ ...contentData, category: e.target.value })}
      />
      <button type="submit">Upload Content</button>
    </form>
  );
};

export default ContentUpload;
