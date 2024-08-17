import {
  ChangePasswordFormInputs,
  NameFormInputs,
  User,
  UserUserNameFormInputs,
} from "../types/user";

const BASE_URL = "http://localhost:5262/api/User";

export const getUser = async () => {
  try {
    const res = await fetch(`${BASE_URL}`);
    return res.json() as Promise<User>;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updateUserName = async ({
  firstName,
  lastName,
}: NameFormInputs) => {
  try {
    await fetch(`${BASE_URL}/name`, {
      method: "PUT",
      body: JSON.stringify(`${firstName} ${lastName}`),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("NAME UPDATED");
    return {
      message: "Name Updated",
    };
  } catch (e) {
    console.error(e);
  }
};

export const updateUserUsername = async ({
  newUserName,
}: UserUserNameFormInputs & {
  oldUserName: string;
}) => {
  try {
    await fetch(`${BASE_URL}/username`, {
      method: "PUT",
      body: JSON.stringify(newUserName.replace(/\s+/g, "").toLowerCase()),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("USER USERNAME UPDATED");
    return {
      message: "Username Updated",
    };
  } catch (e) {
    console.error(e);
  }
};

export const changePassword = async ({
  currentPassword,
  newPassword,
}: ChangePasswordFormInputs) => {
  try {
    if (newPassword === currentPassword)
      throw new Error("You cannot use the same password");

    await fetch(`${BASE_URL}/password`, {
      method: "PUT",
      body: JSON.stringify(newPassword.replace(/\s+/g, "").toLowerCase()),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("USER PASSWORD UPDATED");
    return {
      message: "Password Updated",
    };
  } catch (e) {
    console.error(e);
  }
};
