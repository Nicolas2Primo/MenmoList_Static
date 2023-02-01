import { createContext, useState } from "react";
import React from "react";

const VideoLoadedContext = createContext();

export function VideoLoadedProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    console.log("Video loaded");
  };

  return (
    <VideoLoadedContext.Provider value={{ isLoaded, setIsLoaded, handleLoad }}>
      {children}
    </VideoLoadedContext.Provider>
  );
}

export default VideoLoadedContext;
