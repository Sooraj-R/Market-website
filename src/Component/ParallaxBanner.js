import React, { useEffect, useRef, useState } from "react";
import Img1 from "../Assets/Images/1.png";
import Img2 from "../Assets/Images/2.png";
import Img3 from "../Assets/Images/3.png";
import Img4 from "../Assets/Images/4.png";
import {
  ParallaxProvider,
  ParallaxBanner,
  Parallax
} from "react-scroll-parallax";

const appContainerStyle = {
  position: "relative",
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const scrollContainerStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
  overflowY: "scroll",
  overflowX: "hidden"
};

const backgroundsContainerStyle = {
  position: "absolute",
  height: "100vh",
  width: "100%"
};

const scrollContentStyle = {
  height: "100vh",
  width: "100%"
};

const content = [
  { name: "Img1", img: Img1 },
  { name: "Img2", img: Img2 },
  { name: "Img3", img: Img3 },
  { name: "Img4", img: Img4 }
];

const BannerParallax = () => {
  const containerRef = useRef();
  const [contRef, setContRef] = useState("");

  useEffect(() => {
    setContRef(containerRef.current);
  }, [containerRef]);
  return (
    <ParallaxProvider scrollContainer={contRef}>
      <div style={appContainerStyle}>
        <div style={backgroundsContainerStyle}></div>
        <div
          className="container"
          ref={containerRef}
          className="scrollContainerStyle"
        >
            <ParallaxBanner
              layers={[
                {
                  image: Img4,
                  amount: 0.1
                },
                {
                  image: Img3,
                  amount: 0.2
                },
                {
                  image: Img2,
                  amount: 0.3
                },
                {
                  image: Img1,
                  amount: -0.4
                }
              ]}
              style={{
                height: "100vh",
                width: "100%"
              }}
            ></ParallaxBanner>
          <div
            style={{
              ...scrollContentStyle,
              backgroundColor: "rgba(60,60,60,.5)"
            }}
          ></div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default BannerParallax;