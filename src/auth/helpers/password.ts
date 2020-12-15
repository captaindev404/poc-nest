import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const encrypt = async (plainPassword: string): Promise<string> => {
  const encryptedPassword = bcrypt.hash(plainPassword, SALT_ROUNDS);
  return encryptedPassword;
};

export const compare = async (
  plainPassword: string,
  hashPassword:string ,
): Promise<boolean> => {
  const match = await bcrypt.compare(plainPassword, hashPassword);
  return match;
};
