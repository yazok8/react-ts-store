import { useEffect, useState } from 'react'

//Type of T is whatever we pass in the uselocalstorage hook
export default function useLocalStorage<T>(key: string, defaultValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const localStorageItem = localStorage.getItem(key)
        if (localStorageItem !== null) return JSON.parse(localStorageItem)

        if (typeof defaultValue === "function") {
            return (defaultValue as () => T)

        }

        try {
            if (localStorageItem === null) { return defaultValue; }
            return () => JSON.parse(localStorageItem) || defaultValue

        } catch {
            // if the local storage wasn't a valid JSON return the defult value
            return defaultValue

        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}
