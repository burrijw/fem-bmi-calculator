import { useState } from "react";
import Radios from "../radios/Radios";

const Calculator = () => {
    const [unit, setUnit] = useState("metric");

    const options = ["imperial", "metric"];

    return (
        <form
            id="calculator"
            className="grid w-full grid-cols-2 gap-y-6 rounded-2xl bg-white p-6 shadow-accent">
            <h2 className="col-span-full text-heading-md text-metal-800">
                Enter your details below
            </h2>
            <Radios options={["Metric", "Imperial"]} />
            <div
                id="results"
                className="col-span-full rounded-2xl bg-result-gradient p-8 text-white sm:rounded-r-full">
                <p>
                    Your BMI is<span aria-hidden>...</span>
                    <span>RESULT</span>
                    <span>
                        Your BMI suggests you’re a healthy weight. Your ideal
                        weight is between 63.3kgs - 85.2kgs.
                    </span>
                </p>
            </div>
        </form>
    );
};

export default Calculator;
