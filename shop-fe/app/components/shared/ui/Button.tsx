type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className: string;
    id?: string;
    onClick: () => void;
} & React.ComponentPropsWithoutRef<"button">

export default function Button({children, ...buttonProps}: {children: React.ReactNode, buttonProps: ButtonProps}) {
    return (
        <button {...buttonProps}>
            {children}
        </button>
    )
}