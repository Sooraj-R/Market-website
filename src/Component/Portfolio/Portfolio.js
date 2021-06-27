import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Container from '../../Container';
import Image from './Image';

import imageFile1 from '../../Assets/Images/portfolio/1.jpg';
import imageFile2 from '../../Assets/Images/portfolio/2.jpg';
import imageFile3 from '../../Assets/Images/portfolio/3.jpg';
import imageFile4 from '../../Assets/Images/portfolio/4.jpg';
import imageFile5 from '../../Assets/Images/portfolio/5.jpg';
import imageFile6 from '../../Assets/Images/portfolio/6.jpg';

import './Portfolio.css';

export const Portfolio = () => {
    return (
        <Container scrollAxis="vertical">
            <div className="images">
                <Parallax y={[-20, -60]} className="parallaxImage">
                    <Image src={imageFile1} />
                </Parallax>
                <Parallax y={[-80, -40]} className="parallaxImage">
                    <Image src={imageFile2} />
                </Parallax>
                <Parallax y={[-30, -60]} className="parallaxImage">
                    <Image src={imageFile3} />
                </Parallax>
                <Parallax y={[-50, -10]} className="parallaxImage">
                    <Image src={imageFile4} />
                </Parallax>
                <Parallax y={[-30, -60]} className="parallaxImage">
                    <Image src={imageFile5} />
                </Parallax>
                <Parallax y={[-20, 20]} className="parallaxImage">
                    <Image src={imageFile6} />
                </Parallax>
            </div>
        </Container>
    );
}