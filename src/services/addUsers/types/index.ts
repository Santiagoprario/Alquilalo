
export interface AddUserRequest {
	name: string;
  lastName?: string;
  email: string;
  role: string;
  API_KEY: string;
  uid_client?: string;
  creatorEmail?: string;
}

export interface AddUserResponse {
	message: string;
}
