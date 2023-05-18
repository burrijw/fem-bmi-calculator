import * as RadioGroup from "@radix-ui/react-radio-group";
import type { Unit } from "../calculator/calculator.models";
import type { SetStateAction } from "react";

interface RadiosProps {
    options: Unit[];
    setUnit: Function;
}

function Radios({ options, setUnit }: RadiosProps) {
    //

    const capitalize = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <RadioGroup.Root
            className="col-span-full flex"
            defaultValue={options[0]}
            onValueChange={(value) => {
                console.log(value);

                setUnit(value);
            }}>
            {options.map((item) => {
                return (
                    <div key={item} className="flex w-1/2 items-center gap-4">
                        <RadioGroup.Item
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-metal-200 data-checked:bg-blue-alpha"
                            value={item}
                            id={`${item}-control`}>
                            <RadioGroup.Indicator className="h-4 w-4 rounded-full bg-blue opacity-0 data-checked:opacity-100" />
                        </RadioGroup.Item>
                        <label
                            className="text-body-md font-semibold text-metal-800"
                            htmlFor={`${item}-control`}>
                            {capitalize(item)}
                        </label>
                    </div>
                );
            })}
        </RadioGroup.Root>
    );
}
export default Radios;
