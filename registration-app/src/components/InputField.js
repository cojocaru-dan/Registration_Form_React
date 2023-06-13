function InputField(props) {
    const className = props.className;
    const type = props.type;
    const label = props.label;

    return (
        <div className={className}>
            <label>{label}</label>        
            <input type={type}/>  
        </div>
    )
}

export default InputField;