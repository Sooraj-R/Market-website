import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withController } from 'react-scroll-parallax';
import './Portfolio.css';

class Image extends Component {
    static propTypes = {
        parallaxController: PropTypes.object.isRequired,
        src: PropTypes.string.isRequired,
    };

    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    };

    render() {
        return (
            <div className='img'>
                <img src={this.props.src} onLoad={this.handleLoad} className="port-img"/>
            </div>
        );
    }
}

export default withController(Image);