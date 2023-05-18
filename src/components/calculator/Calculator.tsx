import { useEffect, useRef, useState } from "react";
import Radios from "../radios/Radios";
import TextInput from "../text-input/TextInput";
import clsx from "clsx";
import useSize from "@react-hook/size";
import type { Measurement, Result } from "./calculator.models";

const Calculator = () => {
    //

    const [unit, setUnit] = useState("metric");
    const [measurements, setMeasurements] = useState<Measurement>(
        {} as Measurement
    );
    const [result, setResult] = useState<Result>({} as Result);

    /**
     *  Result Container (#results) border radius needs to be calculated on re-size using the following Ref and useSize hook.
     *  As the height of the container changes, the custom property '--rad' (radius) changes to ensure the "bullet"
     *  shape stays intact.
     */
    // Start results container fix
    const resultsContainerRef = useRef<HTMLDivElement>(null);
    const [resultsContainerWidth, resultsContainerHeight] =
        useSize(resultsContainerRef);

    useEffect(() => {
        resultsContainerRef.current?.style.setProperty(
            "--rad",
            `${resultsContainerHeight / 2}px`
        );
    }, [resultsContainerHeight]);
    //  End results container fix

    return (
        <form
            id="calculator"
            className="grid w-full grid-cols-2 gap-y-6 rounded-2xl bg-white p-6 shadow-accent">
            <h2 className="col-span-full text-heading-md text-metal-800">
                Enter your details below
            </h2>

            {/* Measurement select */}
            <Radios options={["metric", "imperial"]} setUnit={setUnit} />

            {/* Text inputs */}

            {unit === "metric" && (
                <>
                    <TextInput label="Height" id="height-cm" unit="cm" />
                    <TextInput label="Weight" id="weight-kg" unit="kg" />
                </>
            )}
            {unit === "imperial" && (
                <>
                    <div className="col-span-full flex items-end gap-4">
                        <TextInput label="Height" id="height-ft" unit="ft" />
                        <TextInput id="height-inch" unit="in" />
                    </div>
                    <TextInput label="Weight" id="weight-lbs" unit="lbs" />
                </>
            )}

            {/* Results section */}
            <div
                id="results"
                className="col-span-full rounded-2xl bg-result-gradient p-8 text-white sm:rounded-l-2xl sm:rounded-r-[--rad]"
                ref={resultsContainerRef}>
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
