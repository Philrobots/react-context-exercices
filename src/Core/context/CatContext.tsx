import React from "react";

type PaginationProviderType = { page: number, toggle: React.Dispatch<React.SetStateAction<number>> } | undefined;

export const CatContext = React.createContext<PaginationProviderType>(undefined);