import clsx from "clsx";
import React, { createContext, useContext, useState, ReactNode, FC } from "react";

// Define the context's shape
interface DropdownContextProps {
    isOpen: boolean;
    toggleDropdown: () => void;
}

// Create Context for Dropdown State
const DropdownContext = createContext<DropdownContextProps | undefined>(undefined);

// Utility hook for consuming the context
const useDropdownContext = (): DropdownContextProps => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error("Dropdown components must be used within a Dropdown provider");
    }
    return context;
};

// Dropdown component
interface DropdownProps {
    children: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    return (
        <DropdownContext.Provider value={{ isOpen, toggleDropdown }}>
            <div className="dropdown">{children}</div>
        </DropdownContext.Provider>
    );
};

// DropdownToggle component
interface DropdownToggleProps {
    children: ReactNode;
    className?: string;
}

export const DropdownToggle: FC<DropdownToggleProps> = ({ children, className }) => {
    const { toggleDropdown } = useDropdownContext();
    return (
        <button className={clsx(className, ' dropdown-toggle')} onClick={toggleDropdown}>
            {children}
        </button>
    );
};

// DropdownMenu component
interface DropdownMenuProps {
    children: ReactNode;
    className?: string;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ children, className }) => {
    const { isOpen } = useDropdownContext();
    return isOpen ? <div className={clsx('dropdown-menu', className)}>{children}</div> : null;
};

// DropdownItem component
interface DropdownItemProps {
    children: ReactNode;
    onClick?: () => void;
}

export const DropdownItem: FC<DropdownItemProps> = ({ children, onClick }) => {
    return (
        <div className="dropdown-item" onClick={onClick}>
            {children}
        </div>
    );
};
