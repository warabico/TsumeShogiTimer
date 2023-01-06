import React from 'react';

interface TimeModulePropsType
{
    show: boolean;
    active: boolean;
    minutes: number;
    seconds: number;
    fontSize: string;
}

const TimeModule = ( props: TimeModulePropsType ) => {
    const timeStr = ( num: number ) => {
        if ( props.show )
        {
            return ('00' + num).slice(-2);
        }
        else
        {
            return '--';
        }
    }

    return (
        <>
            <div style={ { fontSize: props.fontSize, color: props.active ? 'white' : 'gray' } }>
                <span>{ timeStr( props.minutes ) }</span>:<span>{ timeStr( props.seconds ) }</span>
            </div>
        </>
    )
}

export default TimeModule;
