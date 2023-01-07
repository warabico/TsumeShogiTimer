import React from 'react';

interface UseCSVPropsType
{
    data: string[][]
    filename: string
}

const useCSV = () => {
    const download = ( props: UseCSVPropsType ) => {
        const bom = new Uint8Array([0xEF, 0xBB, 0xBF]) 
        const blob = new Blob([ bom, props.data.join('\r\n') ], { type : 'text/csv' }) 
        const element = document.createElement('a') 
        const objectUrl = window.URL.createObjectURL(blob)
        element.href = objectUrl 
        element.setAttribute('download', props.filename); 
        document.body.appendChild(element) 
        element.click() 
        window.URL.revokeObjectURL(objectUrl) 
        document.body.removeChild(element) 
    }

    return { download };
}

export default useCSV;
