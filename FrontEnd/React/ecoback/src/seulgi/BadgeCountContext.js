// BadgeCountContext.js

import React, { createContext, useState } from 'react';

// Context 생성
export const BadgeCountContext = createContext();

// Provider 컴포넌트
export const BadgeCountProvider = ({ children }) => {
    const [badgeCnt, setBadgeCnt] = useState(0);

    return (
        <BadgeCountContext.Provider value={{ badgeCnt, setBadgeCnt }}>
            {children}
        </BadgeCountContext.Provider>
    );
};
