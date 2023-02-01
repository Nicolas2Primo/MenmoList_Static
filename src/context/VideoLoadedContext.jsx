import { createContext, useState } from "react";
import React from "react";

const VideoLoadedContext = createContext();

export function VideoLoadedProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(true);

  const handleLoad = () => {
    setIsLoaded(false);
    console.log("Video loaded" + isLoaded);
  };

  return (
    <VideoLoadedContext.Provider value={{ isLoaded, setIsLoaded, handleLoad }}>
      {children}
    </VideoLoadedContext.Provider>
  );
}

export default VideoLoadedContext;
