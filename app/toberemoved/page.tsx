'use client';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const ToBeRemoved = () => {
    const [isSSR, setIsSSR] = useState(true);
    const imagePlaceholder = '/static/images/video_thumbnail.png';

    useEffect(() => {
        setIsSSR(false);
    }, []);
    return isSSR ? null : (
        <ReactPlayer
            url={'https://www.youtube.com/watch?v=_lqdfq2c9cQ'}
            light={true}
            // width={'720px'}
            // height={'480px'}
            // style={{ border: '1px solid white' }}
            playing={true}
            volume={1}
            pip={true}
            controls={true}
            loop={false}
            stopOnUnmount={true}
            className="h-[197px] w-full"
        />
    );
};

export default ToBeRemoved;
