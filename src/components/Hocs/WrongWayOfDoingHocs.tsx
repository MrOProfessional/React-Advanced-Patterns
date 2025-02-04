import { useState, useEffect } from 'react';

type Props = {
    name: string
}
function UserInfo({ name }: Props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <p>User: {name}</p>;
}


export default UserInfo;