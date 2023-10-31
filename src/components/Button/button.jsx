
import './button.css'

function Button({ text, clickHandler, whiteBg = false, type = 'button' }) {
    
    return (
        <>
            <button type={type} onClick={clickHandler} className='button' style={{
                backgroundColor: whiteBg ? 'white' : 'purple',
                color: whiteBg ? 'purple' : 'white',
                border: whiteBg ? '2px solid purple' : 'none'
            }}>{text}</button>
        </>
    )
}

export default Button;