import React, { useState } from 'react';
import './gallery.css';

const Gallery = () => {

    const data = [
        {
            id: 1,
            imgSrc: 'https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661668351/digital/bird-and-boy-min_optimized_lsduth.jpg',
        },
        {
            id: 2,
            imgSrc: 'https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661668350/digital/an-old-story-min_optimized_dv0jzk.jpg',
        },
        {
            id: 3,
            imgSrc: 'https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661668350/digital/alone-min_optimized_hbcqen.jpg',
        },
        {
            id: 4,
            imgSrc: 'https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661668352/digital/materialistic-evolution-min_optimized_wwhwae.jpg',
        },
        {
            id: 5,
            imgSrc: 'https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661668352/digital/objective-reality-min_optimized_dbake5.jpg',
        },
        {
            id: 6,
            imgSrc: 'https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661668353/digital/runner-min_optimized_ktohww.jpg',
        },
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt="" />
            <div  className='svg'>
            <img onClick={() => setModel(false)} src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661787061/images/close_qztzzl.png" alt="" />
            </div>
        </div>
        <div className='gallery'>
            {
                data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc}  alt="" />
                        </div>
                    )
                })
            }
        </div>
        </>
    );
};

export default Gallery;
