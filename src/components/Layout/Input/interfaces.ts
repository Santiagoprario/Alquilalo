export default interface InputProps {
	name?: string;
	title?: string;
	onChange?: () => void;
	onFocus?: () => void;
	onBlur?: () => void;
	disabled?: boolean;
	id?: string;
	type?: string;
	placeholder?: string;
}
