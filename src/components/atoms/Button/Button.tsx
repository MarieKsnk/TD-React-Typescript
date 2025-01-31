import { IButtonProps } from "./Button.props";
import "./Button.css";

export const Button: React.FC<IButtonProps> = ({ label, onClick, disabled }) => {
    return (
        <button className="button" onClick={onClick} disabled={disabled}>
            {label}
        </button>
    )
}