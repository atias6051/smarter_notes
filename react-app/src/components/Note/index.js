import React, { useRef, useState } from 'react';
import "./Note.css"

function Note(){
    const [content, setContent] = useState('');

  function handleInput() {
    setContent(document.getElementById('editor').innerHTML);
  }

  const addSpan = () => {
    const textDiv = document.getElementById('editor');
    const selection = window.getSelection();
    // const { anchorOffset } = selection;
    const span = document.createElement('span');
    span.textContent = '*&*';
    span.contentEditable = false
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
    // setContent(textDiv.innerHTML);
    // textDiv.focus()
    const newRange = document.createRange();
    newRange.setStartAfter(span);
    newRange.setEndAfter(span);
    selection.removeAllRanges();
    selection.addRange(newRange);

    setContent(textDiv.innerHTML);
    textDiv.focus();
    console.log(textDiv.innerHTML)
  }

  return (
    <div id="note-container">
        <div
          id="editor"
          contentEditable
          onInput={handleInput}
          //   dangerouslySetInnerHTML={{ __html: content }}
          innerHTML={content}
          />
        <button onClick={addSpan}>+Add</button>
    </div>
  );
//     const [note, setNote] = useState('');

//   const handleAddSpan = () => {
//     setNote(prevNote => prevNote + '<span>$</span>');
//   };

//   return (
//     <div className="note-container">
//       <div
//         className="note-text"
//         contentEditable={true}
//         dangerouslySetInnerHTML={{ __html: note }}
//         onChange={e => {
//             console.log(e.target.innerHTML)
//             setNote(e.target.innerHTML)
//         }}
//       />
//       <button onClick={handleAddSpan}>Add $</button>
//     </div>
//   );

    // const [noteObj,setNoteObj] = useState({content: ''})
    // const textRef = useRef(null)

    // function handleButtonClick() {
    //     const selection = window.getSelection();
    //     console.log(selection)
    //     const cursorPosition = selection.focusOffset;
    //     const newValue = noteObj.content.substring(0, cursorPosition) + '$$$' + noteObj.content.substring(cursorPosition);
    //     setNoteObj({ ...noteObj, content: newValue });
    //   }

    // const updateContent = () => {
    //     const newContent = textRef.current.innerHTML;
    //     setNoteObj({ ...noteObj, content: newContent });
    //   };
    // return(
    //     <div className='note-container'>
    //         <button onClick={handleButtonClick}>+</button>
    //         <div className='note-text'
    //         contentEditable={true}
    //         onInput={updateContent}
    //         ref={textRef}
    //         >{noteObj.content}</div>
    //     </div>
    // )
}

export default Note
