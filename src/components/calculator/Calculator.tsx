import { useEffect, useRef, useState } from "react";
import Radios from "../radios/Radios";
import TextInput from "../text-input/TextInput";
import clsx from "clsx";
import useSize from "@react-hook/size";

const Calculator = () => {
    const [unit, setUnit] = useState("metric");

    const options = ["imperial", "metric"];

    const resultsRef = useRef<HTMLDivElement>(null);
    const [resultsX, resultsY] = useSize(resultsRef);

    useEffect(() => {
        resultsRef.current?.style.setProperty("--rad", `${resultsY / 2}px`);
        console.log("The --rad is now ", resultsY / 2);
    }, [resultsY]);

    return (
        <form
            id="calculator"
            className="grid w-full grid-cols-2 gap-y-6 rounded-2xl bg-white p-6 shadow-accent">
            <h2 className="col-span-full text-heading-md text-metal-800">
                Enter your details below
            </h2>

            {/* Measurement select */}
            <Radios options={["Metric", "Imperial"]} />

            {/* Text inputs */}
            <div className="col-span-full flex flex-col gap-4">
                <label className="text-body-sm text-metal-600" htmlFor="height">
                    Height
                </label>
                <div
                    className={
                        "relative before:absolute before:inset-0 before:my-auto before:ml-auto before:mr-6 before:h-min before:w-min before:text-heading-md before:text-blue before:content-['cm']"
                    }>
                    <input
                        className={
                            "w-full rounded-xl border border-metal-200 px-6 py-5 text-heading-md text-metal-800 placeholder:text-metal-800 placeholder:opacity-25"
                        }
                        type="number"
                        min={0}
                        id="height"
                        name="height"
                        placeholder="0"
                    />
                </div>
            </div>
            <div className="col-span-full flex flex-col gap-4">
                <label className="text-body-sm text-metal-600" htmlFor="weight">
                    Weight
                </label>
                <div
                    className={
                        "relative before:absolute before:inset-0 before:my-auto before:ml-auto before:mr-6 before:h-min before:w-min before:text-heading-md before:text-blue before:content-['kg']"
                    }>
                    <input
                        className={
                            "w-full rounded-xl border border-metal-200 px-6 py-5 text-heading-md text-metal-800 placeholder:text-metal-800 placeholder:opacity-25"
                        }
                        type="number"
                        min={0}
                        id="weight"
                        name="weight"
                        placeholder="0"
                    />
                </div>
            </div>

            {/* Results section */}
            <div
                id="results"
                className="col-span-full rounded-2xl bg-result-gradient p-8 text-white sm:rounded-l-2xl sm:rounded-r-[--rad]"
                ref={resultsRef}>
                <div>
                    <p className="mb-4 text-heading-md">Welcome!</p>
                    <p className="text-body-sm">
                        Enter your height and weight and you'll see your BMI
                        result here.
                    </p>
                </div>
            </div>
        </form>
    );
};

export default Calculator;
