import { createContext } from "react";
import * as type from "./types.ts";

export const dataContext = createContext<type.Root | null>(null);
export const flightContext = createContext<{ data: type.Daum; cityInfo: type.City } | null>(null);
