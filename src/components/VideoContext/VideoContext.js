import React, { createContext, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [video, setVideos] = useState([]);

    const addVideo = (newVideo) => {
        setVideos([...video, newVideo]);
    };

    const deleteVideo = (id) => {
        setVideos(video.filter(video => video.id !== id));
    };

    return (
        <VideoContext.Provider value={{ video, setVideos, addVideo, deleteVideo }}>
            {children}
        </VideoContext.Provider>
    );
};

export default VideoContext;
