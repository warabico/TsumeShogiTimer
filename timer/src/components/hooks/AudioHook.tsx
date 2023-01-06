import React from 'react';

interface UseAudioPropsType
{
    url: string;
}

const useAudio = ( props: UseAudioPropsType ) => {
    const [ audio ] = React.useState( new Audio( props.url ) );

    const play = () => {
        audio.play();
    }
    
    return { play };
}

export default useAudio;
