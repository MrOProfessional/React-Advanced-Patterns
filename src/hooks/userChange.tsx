import { useState } from "react";

export const useUserChange = () => {
    const [isBottonPressed, setBottonPressed] = useState(false);

    const toggleButtonPress = () => {
        setBottonPressed(true);
    };

    return { isBottonPressed, toggleButtonPress };
};
