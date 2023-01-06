import React from 'react';

interface UseAudioPropsType
{
    url: string;
}

const useAudio = ( props: UseAudioPropsType ) => {
    const [ audio ] = React.useState( new Audio( props.url ) );

    React.useEffect( () => {
        audio.load();
        return ( () => {

        } )
    }, [] );

    const play = () => {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
    
    return { play };
}

export default useAudio;
