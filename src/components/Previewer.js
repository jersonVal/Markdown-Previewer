import React from "react";
import marked from "marked";

const PreViewer = ({text})=>{

    const btnOpenDown = (e)=>{
        const div = document.querySelector('.preViewer-container')

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

    return (
        <div className="preViewer-container">
            <div className="nav">
                <span className="title">Previewer Markdown</span>
                <i className="fas fa-expand-arrows-alt" onClick={btnOpenDown}></i>
            </div>
            <div id="preview">
                
            </div>
        </div>
    )

}

export default PreViewer;