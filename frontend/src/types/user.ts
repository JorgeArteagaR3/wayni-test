export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

export type NameFormInputs = {
  firstName: string;
  lastName: string;
};

export type UserUserNameFormInputs = {
  newUserName: string;
};

export type ChangePasswordFormInputs = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
