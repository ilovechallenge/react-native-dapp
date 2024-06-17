import EncryptedStorage from 'react-native-encrypted-storage';

export const Storage = {
    setItem: async (key, value) => {
        try {
            await EncryptedStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);            
        }
    },
    getItem: async (key) => {
        try {
            const value = await EncryptedStorage.getItem(key);
            if (value) {
                return JSON.parse(value);
            }
        } catch (error) {
            console.error(error);
        }
    },
    removeItem: async (key) => {
        try {
            await EncryptedStorage.removeItem(key);
        } catch (error) {
            console.error(error);
        }
    },
    removeAll: async () => {
        try {
            await EncryptedStorage.clear();
        } catch (error) {
            console.error(error);
        }
    }
}