import { atom } from 'recoil';

export const usernameState = atom({
  key: 'userName',
  default: 'Awais',
});
