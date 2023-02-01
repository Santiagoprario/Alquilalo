import { useLocation } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useCurrentUrl = () => {
	const { pathname, search } = useLocation();

	return {
		currentUrl: pathname + search,
		pathname,
		search,
	};
};

export default useCurrentUrl;
