import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';
import { ChangePasswordRequest, AddUserResponse } from './types';

const SERVICE_BASE_URL = `${API_URL}/users`;

export const changePasswordRequest = ({ idUser, oldPassword, newPassword}: ChangePasswordRequest): FetchServiceEndpoint<AddUserResponse> => {
	const url = `${SERVICE_BASE_URL}/${idUser}`;

	return {
		keys: ['change-password'],
		fetcher: options =>
			fetchJson<AddUserResponse>({
				url,
				method: 'PUT',
				data: { oldPassword, newPassword },
				...options,
			}).then(res => {
				return res;
			}),
	};
};
