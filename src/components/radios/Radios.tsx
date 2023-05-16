import * as RadioGroup from "@radix-ui/react-radio-group";

interface RadiosProps {
    options: string[];
}

function Radios({ options }: RadiosProps) {
    return (
        <RadioGroup.Root className="col-span-full flex">
            {options.map((item) => {
                const itemLowerCase = item.toLowerCase();
                return (
                    <div key={item} className="flex w-1/2 items-center gap-5">
                        <RadioGroup.Item
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-metal-200 data-checked:bg-blue-alpha"
                            value={item}
                            id={`${itemLowerCase}-control`}>
                            <RadioGroup.Indicator className="h-4 w-4 rounded-full bg-blue opacity-0 data-checked:opacity-100" />
                        </RadioGroup.Item>
                        <label
                            className="text-body-md font-semibold text-metal-800"
                            htmlFor={`${itemLowerCase}-control`}>
                            {item}
                        </label>
                    </div>
                );
            })}
        </RadioGroup.Root>
    );
}
export default Radios;
