import React from 'react'

export default function Backdrop(props) {
    return (
        <div className="backdrop" onClick={props.onClose} style={{position:'absolute',height:'100%', width:'100%'}}/>
    )
}
