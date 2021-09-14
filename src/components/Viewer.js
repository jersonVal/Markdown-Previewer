import React from "react";

const Viewer = ({setText,text})=>{

    const btnOpenDown = (e)=>{
        const div = document.querySelector('.viewer-container')

        if(e.target.classList.contains('fa-expand-arrows-alt')){
            e.target.classList.remove('fa-expand-arrows-alt')
            e.target.classList.add('fa-expand-alt')
            div.style.height = '100vh'
        }else{
            e.target.classList.add('fa-expand-arrows-alt')
            e.target.classList.remove('fa-expand-alt')
            div.style.height = '40vh'
        }
    }

    const handleText = (e)=>{
        setText(e.target.value)
    }

    return (
        <div className="viewer-container">
            <div className="nav">
                <span className="title">Editor</span>
                <i className="fas fa-expand-arrows-alt" onClick={btnOpenDown}></i>
            </div>
            <textarea id="editor" onChange={handleText}>{text}</textarea>
        </div>
    )

}

export default Viewer;