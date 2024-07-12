// components/ImageDownloader.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ImageDownloader = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleDownload = async () => {
    try {
      const response = await axios.get(`/api/convert-image?imageUrl=${encodeURIComponent(imageUrl)}`);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error downloading image:', error);
      setMessage('Failed to download image.');
    }
  };

  return (
    <div>
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter image URL" className='text-black'/>
      <button onClick={handleDownload} className='bg-black'>Download Image</button>
      {message && <p className='text-black'>{message}</p>}
    </div>
  );
};

export default ImageDownloader;
