function Button({ text, whiteBg = false }) {
    return (
        <>
            <button style={{
                backgroundColor: whiteBg ? 'white' : 'purple',
                color: whiteBg ? 'purple' : 'white',
            }}>{text}</button>
        </>
    )
}

export default Button;