import React, { useEffect, useRef, useState } from 'react';
import "./Note.css"

function Note(){
    const [content, setContent] = useState('');

  function handleInput() {
    setContent(document.getElementById('editor').innerHTML);
  }

  useEffect(()=>{
    const textDiv = document.getElementById('editor');
    textDiv.focus()
  },[])

  const removeBlock = e => {
    const span = e.target.parentNode;
    span.parentNode.removeChild(span);
    const textDiv = document.getElementById('editor');
    setContent(textDiv.innerHTML);
    textDiv.focus();
  }

  const addSpan = () => {
    const textDiv = document.getElementById('editor');
    textDiv.focus();
    const selection = window.getSelection();
    // const { anchorOffset } = selection;
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.classList.add('remove-block-button')
    button.innerText = 'X'
    button.addEventListener('click',removeBlock)
    span.textContent = 'BLOCK';
    span.appendChild(button)
    span.contentEditable = false
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
    // textDiv.innerHTML+=" "

    const newRange = document.createRange();
    newRange.setStartAfter(span);
    newRange.setEndAfter(span);
    selection.removeAllRanges();
    selection.addRange(newRange);
    setContent(textDiv.innerHTML);
    textDiv.focus();
    // console.log(textDiv.innerHTML)
  }

  const logger = () => {
    const textDiv = document.getElementById('editor');
    const selection = window.getSelection();
    console.log(textDiv)
    console.log(selection)
    const range = selection.getRangeAt(0);
    console.log(range)
    console.log(content)
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
        <div className='flex'>
          <button onClick={addSpan}>+Add</button>
          <button onClick={logger}>+Console_Logger</button>
        </div>
    </div>
  );

}

export default Note
