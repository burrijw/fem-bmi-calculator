interface TextInputProps {
    id: string;
    label: string;
    isImperial: boolean;
}
function TextInput({ id, label, isImperial = false }: TextInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-body-sm text-metal-600" htmlFor={id}>
                {label}
            </label>
            <input type="text" name={label} id={id} />
        </div>
    );
}
export default TextInput;
