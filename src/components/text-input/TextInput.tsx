import clsx from "clsx";

interface TextInputProps {
    id: string;
    label?: string;
    unit: string;
}
function TextInput({ id, label, unit }: TextInputProps) {
    //
    const styleMap: Record<string, string> = {
        cm: "before:content-['cm']",
        kg: "before:content-['kg']",
        ft: "before:content-['ft']",
        in: "before:content-['in']",
        lbs: "before:content-['lb']",
    };

    return (
        <div className="col-span-full flex flex-col gap-4">
            {label && (
                <label className="text-body-sm text-metal-600" htmlFor={id}>
                    {label}
                </label>
            )}
            <div
                className={clsx([
                    "relative before:absolute before:inset-0 before:my-auto before:ml-auto before:mr-6 before:h-min before:w-min before:text-heading-md before:text-blue",
                    `${styleMap[unit]}`,
                ])}>
                <input
                    className={
                        "w-full rounded-xl border border-metal-200 px-6 py-5 text-heading-md text-metal-800 placeholder:text-metal-800 placeholder:opacity-25"
                    }
                    type="number"
                    min={0}
                    id={id}
                    name={id}
                    placeholder="0"
                />
            </div>
        </div>
    );
}
export default TextInput;
