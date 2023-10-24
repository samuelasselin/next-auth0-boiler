import { useContext } from 'react';

import type { AuthContextType as Auth0AuthContextType } from 'src/contexts/auth/auth0';
import {AuthContext} from "src/contexts/auth/auth0";

type AuthContextType = Auth0AuthContextType

export const useAuth = <T = AuthContextType>() => useContext(AuthContext) as T;
