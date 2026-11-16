import React, { useState, useEffect } from 'react';
import '../pages/Homepage.css'

const images = [
    '/images/Mom_Photos_Cropped/mom_apartments.png',
    '/images/Mom_Photos_Cropped/mom_beach.png',
    '/images/Mom_Photos_Cropped/mom_bed.png',
    '/images/Mom_Photos_Cropped/mom_beach_hat.png',
    '/images/Mom_Photos_Cropped/mom_boat.png',
    '/images/Mom_Photos_Cropped/mom_brick_wall.png',
    '/images/Mom_Photos_Cropped/mom_chair.png',
    '/images/Mom_Photos_Cropped/mom_cruise_stairs.png',
    '/images/Mom_Photos_Cropped/mom_disneyWorld.png',
    '/images/Mom_Photos_Cropped/mom_grandma.png',
    '/images/Mom_Photos_Cropped/mom_ID.png',
    '/images/Mom_Photos_Cropped/mom_KFC.png',
    '/images/Mom_Photos_Cropped/mom_lion_statue.png',
    '/images/Mom_Photos_Cropped/mom_metal_fence.png',
    '/images/Mom_Photos_Cropped/mom_OU.png',
    '/images/Mom_Photos_Cropped/mom_palm_tree.png',
    '/images/Mom_Photos_Cropped/mom_peace_sign.png',
    '/images/Mom_Photos_Cropped/mom_poster.png',
    '/images/Mom_Photos_Cropped/mom_purpleDress.png',
    '/images/Mom_Photos_Cropped/mom_purpleShirt.png',
    '/images/Mom_Photos_Cropped/mom_red_jacket.png',
    '/images/Mom_Photos_Cropped/mom_red_pjs.png',
    '/images/Mom_Photos_Cropped/mom_red_shirt_livingRoom.png',
    '/images/Mom_Photos_Cropped/mom_redDress.png',
    '/images/Mom_Photos_Cropped/mom_rockwall.png',
    '/images/Mom_Photos_Cropped/mom_stairs.png',
    '/images/Mom_Photos_Cropped/mom_stone_gate.png',
    '/images/Mom_Photos_Cropped/mom_stores.png',
    '/images/Mom_Photos_Cropped/mom_streets.png',
    '/images/Mom_Photos_Cropped/mom_sunBathing.png',
    '/images/Mom_Photos_Cropped/mom_swimSuit.png',
    '/images/Mom_Photos_Cropped/mom_uncle.png',
    '/images/Mom_Photos_Cropped/mom_white_fence.png',
    '/images/Mom_Photos_Cropped/mom_white_turtleneck.png',
    '/images/Mom_Photos_Cropped/Mom_with_friend.png',
    '/images/Mom_Photos_Cropped/mom_yellow_building.png',
    '/images/Mom_Photos_Cropped/toddler_mom.png',
];

export default function ImageScrolling(){
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return() => clearInterval(timer);

    }, []);

    return(
        <img className="scroll-img" src={images[currentIndex]} alt={`Slide ${currentIndex}`}/>
    )
}
