import Button from '../Button/button';
import './forms.css';
function Forms({children, headerText, submitText, submitHandler, whiteBg = false}) {

    const submit = (event) => {
        event.preventDefault();
        typeof submitHandler === 'function' && submitHandler();
    }
    return (
        <form className="forms" onSubmit={submit}>
            <h1>{headerText}</h1>
            {children}
            <br />
            <Button text={submitText} whiteBg={whiteBg} type='submit'  />
        </form>
    );
}

export default Forms;