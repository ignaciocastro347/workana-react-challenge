import { capFirstLetter } from "@/utils/strings";

interface LabeledTextfieldProps extends React.HTMLProps<HTMLInputElement>{
    label: string;
    value: string;
    handleChange: (value: string) => void;
}

const LabeledTextfield = ({ label, value, handleChange, ...rest }: LabeledTextfieldProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold text-white">{label}</label>
            <input
                className="bg-inputBg text-black p-2 rounded focus:outline-none focus:ring-4 focus:ring-primary/80 focus:ring-opacity-80"
                type="text"
                value={value}
                onChange={(e) => handleChange(capFirstLetter(e.target.value.trim()))}
                {...rest}
            />
        </div>
    );
}

export default LabeledTextfield;