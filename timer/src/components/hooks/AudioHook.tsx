import React from 'react';

interface UseAudioPropsType
{
    url: string;
}

const useAudio = ( props: UseAudioPropsType ) => {
    const [ audio ] = React.useState( new Audio( props.url ) );

    const load = () => {
        audio.load();
    }

    const play = () => {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
    
    return { play, load };
}

export default useAudio;
