"use server";

export const signInWithEmail = async (data: {
  email: string;
  password: string;
}) => {
  console.log(data);

  return {
    success: true,
  };
};

export const signUpWithEmail = async (data: {
  email: string;
  password: string;
}) => {
  console.log(data);

  return {
    success: true,
  };
};