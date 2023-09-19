import { createContext } from "react";
import * as type from "./types.ts";

export const dataContext = createContext<type.Root | null>(null);
export const dictionariesContext = createContext<type.Dictionaries | null>(null);
