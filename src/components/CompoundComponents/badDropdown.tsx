import React, { useState } from "react";

interface DropdownProps {
    items: { label: string; onClick: () => void }[];
}

export const Dropdown1: React.FC<DropdownProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                Toggle Menu
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="dropdown-item"
                            onClick={item.onClick}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Usage Example
export default Dropdown1;