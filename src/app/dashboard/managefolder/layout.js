import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <nav>sidebar</nav>
            {children}
        </div>
    );
};

export default layout;