import React, { useRef, useState } from 'react';

function Note(){

    const [noteObj,setNoteObj] = useState({content: ''})
    const textRef = useRef(null)

    const updateNote = e => {
        const newContent = e.target.value;
        setNoteObj({ ...noteObj, content: newContent });
        textRef.current.innerHTML = newContent;
    }

    const updateContent = () => {
        const newContent = textRef.current.innerHTML;
        setNoteObj({ ...noteObj, content: newContent });
      };
    return(
        <div className='note-container'>
            {/* <textarea
            value={noteObj.content}
            onChange={updateNote}
            ref={textRef}
            placeholder='Type you note here...'
            >
            </textarea> */}
            <button>+</button>
            <div className='note-text'
            contentEditable={true}
            onInput={updateContent}
            ref={textRef}
            ></div>
        </div>
    )
}

export default Note
