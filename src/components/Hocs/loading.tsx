import React, { useState, useEffect, ComponentType } from 'react';

function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
  return function WithLoadingComponent(props: T) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;
