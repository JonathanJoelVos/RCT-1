import AsyncStorage from '@react-native-async-storage/async-storage';
import { BookType } from '../dtos/book';
import { STORAGE_KEYS } from './storageConfig';

export const getLastBookReadInStorage = async () => {
    try {
        const lastBook = await AsyncStorage.getItem(STORAGE_KEYS.LAST_BOOK)

        return JSON.parse(lastBook)
    } catch (error) {
        console.log(error)
    }
}

export const setLastBookReadInStorage = async (book: BookType) => {
    try {
        console.log("setou", book)
        await AsyncStorage.setItem(STORAGE_KEYS.LAST_BOOK, JSON.stringify(book))
    } catch (error) {
        console.log(error)
    }
}

export const removeLastBookReadInStorage = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEYS.LAST_BOOK)
    } catch (error) {
        console.log(error)
    }
}

export const updateLastPageReadInStorage = async (lastPage: number) => {
    try {
        const lastBook = await AsyncStorage.getItem(STORAGE_KEYS.LAST_BOOK)
        console.log("update", lastBook)
        await AsyncStorage.setItem(STORAGE_KEYS.LAST_BOOK, JSON.stringify({
            ...JSON.parse(lastBook),
            lastPageRead: lastPage
        }))
    } catch (error) {
        console.log(error)
    }
}

export const updateTotalPagesInStorage = async (totalPages: number) => {
    try {
        const lastBook = await AsyncStorage.getItem(STORAGE_KEYS.LAST_BOOK)
        console.log("update", lastBook)
        await AsyncStorage.setItem(STORAGE_KEYS.LAST_BOOK, JSON.stringify({
            ...JSON.parse(lastBook),
            totalPages: totalPages
        }))
    } catch (error) {
        console.log(error)
    }
}