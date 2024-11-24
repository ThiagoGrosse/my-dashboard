"use client";
import React, {createContext, useContext, useState, ReactNode} from "react";

interface SidebarContextType {
    isOpenSidebar: boolean;
    toggleSidebar: (isOpen: boolean) => void; // Agora aceita um argumento booleano
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProviderProps {
    children: ReactNode;
}

export const SidebarProvider = ({children}: SidebarProviderProps) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const toggleSidebar = (isOpen: boolean) => {
        setIsOpenSidebar(isOpen);
    };

    return <SidebarContext.Provider value={{isOpenSidebar, toggleSidebar}}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar deve ser usado dentro de um SidebarProvider");
    }
    return context;
};
