interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    label: string;
    type: "submit" | "button"
}

const Button = ({ label, type,  ...rest }: ButtonProps) => {
    return (
        <button
            className="w-full bg-primary hover:bg-primary/80 text-xl text-white/90 font-semibold py-4 px-4 rounded-md"
            type={type}
            {...rest}
        >
            {label}
        </button>
    );
}

export default Button;