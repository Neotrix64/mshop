import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Banner(){
    return(
        <>
        <div className="w-full md:h-[40vh] fixed top-23 -z-10">
            <img src="https://cdn.thewirecutter.com/wp-content/media/2023/11/laptops-2048px-8826.jpg" alt="" className="w-full h-full object-cover object-left-bottom"/>
        </div>
        </>
    );
}

export default Banner;