export const getStoredUsers = () => JSON.parse(localStorage.getItem('aviator_users') || '[]');
export const saveUsers = (u) => localStorage.setItem('aviator_users', JSON.stringify(u));
export const getPlatformSettings = () => ({profitMode: 'NORMAL', minCrash: 1.1, maxCrash: 10, instantCrashChance: 10});
export const getStoredTransactions = () => [];
export const updateTransactionStatus = () => {};
