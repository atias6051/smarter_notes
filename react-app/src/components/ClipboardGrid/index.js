import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNotes } from '../../store/notes';

export default function ClipboardGrid(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getNotes())
    },[dispatch])

    return (
        <div>
            <h3>My copy notes</h3>
        </div>
    )
}
