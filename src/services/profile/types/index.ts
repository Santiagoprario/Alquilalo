
export interface ChangePasswordRequest {
	idUser?: string;
  oldPassword: string;
  newPassword: string;
}

export interface AddUserResponse {
	status: 'success' | 'error';
}
