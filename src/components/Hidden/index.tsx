import React from 'react';

type HiddenProps = {
	children: React.ReactNode;
	hidden: boolean;
};

function Hidden({ children, hidden }: HiddenProps): JSX.Element {
	const isHiddenClass = `h-full ${hidden ? 'hidden' : ''}`;

	return <div className={isHiddenClass}>{children}</div>;
}

export type { HiddenProps };
export default Hidden;
