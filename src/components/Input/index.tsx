import React, { FunctionComponent } from 'react';
import InputProps from './interfaces';

const Input: FunctionComponent<InputProps> = ({
	name,
	onChange,
	onFocus,
	onBlur,
	title,
	disabled = false,
	type = 'text',
	placeholder,
	id,
	...rest
}) => {
	return (
		<div>
			<p>{title}</p>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				name={name}
				disabled={disabled}
				onBlur={onBlur}
				onChange={onChange}
				onFocus={onFocus}
				className="tw-w-full tw-shadow tw-rounded-lgv tw-p-2 tw-border-zinc-500 tw-wd-64"
			/>
			{rest}
		</div>
	);
};

export default Input;
