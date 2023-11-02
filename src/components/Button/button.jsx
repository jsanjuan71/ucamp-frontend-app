
import { useState } from 'react';
import './button.css'

function Button({ text, clickHandler, whiteBg = false, type = 'button' }) {
    const [hovered, setHovered] = useState(whiteBg);
    const primaryColor = 'purple';
    const secondaryColor = 'white';
    
    return (
        <>
            <button 
                type={type}
                onClick={clickHandler ? clickHandler : () => console.log( type !== "submit" ? 'No click handler provided to [' + text + '] button' : 'Submit button clicked')} 
                className='button' 
                style={{
                    backgroundColor: hovered ? secondaryColor : primaryColor,
                    color: hovered ? primaryColor : secondaryColor,
                    border: hovered ? '2px solid '+ primaryColor : 'none'
                }}
                onMouseEnter={() => setHovered(!hovered)}
                onMouseLeave={() => setHovered(!hovered)}
            >
                {text}
            </button>
        </>
    )
}

export default Button;