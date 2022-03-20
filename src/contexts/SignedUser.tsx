import { createContext, Dispatch, SetStateAction } from 'react';

export interface ISignedUserContext {
  isSigned: boolean,
  setIsSigned: Dispatch<SetStateAction<boolean>>,
}

export const isUserLoggedDefault: ISignedUserContext = {
  isSigned: localStorage.loggedUser,
  setIsSigned: () => {
  },
}

export const IsUserLoggedContext = createContext<ISignedUserContext>(isUserLoggedDefault);