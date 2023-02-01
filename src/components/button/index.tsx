import React from 'react';

type ButtonProps = {
	id?: string;
	children: string;
	type?: 'submit' | 'button';
	color?: string;
	variant?: 'primary' | 'secondary';
	className?: string;
	disabled?: boolean;
	size?: 'small' | 'medium' | 'large';
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FunctionComponent<ButtonProps> = ({
	children,
	onClick,
	disabled = false,
	id,
	type,
	size,
	variant = 'primary',
	...rest
}: ButtonProps) => {
	const styleVariant =
		variant === 'primary'
			? `tw-tracking-wide tw-text-white tw-inline-block tw-transition-colors tw-duration-200 tw-transform tw-bg-blue-700 tw-rounded-md hover:tw-bg-blue-600 focus:tw-outline-none ${
					disabled && 'tw-opacity-75 tw-pointer-events-none'
			  }`
			: `tw-inline-block tw-bg-blue-600 tw-col tw-text-white ${
					disabled ? 'tw-opacity-75 ' : 'hover:tw-bg-yellow-500'
			  }`;

	const sizes = {
		small: 'tw-h-8 tw-w-20',
		medium: 'tw-h-10 tw-w-40',
		large: 'tw-h-12 tw-w-60',
	};

	return (
		<button
			onClick={onClick}
			type={type}
			id={id}
			disabled={disabled}
			className={`tw-rounded-lg tw-p-2 ${styleVariant} ${
				size ? sizes[size] : 'tw-w-full'
			}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
