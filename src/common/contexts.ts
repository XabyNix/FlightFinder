import { createContext } from "react";
import * as type from "./types.ts";

export const formRefContext = createContext(null);
export const dictionariesContext = createContext<type.Dictionaries | null>(null);
