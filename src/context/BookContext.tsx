import { createContext, ReactNode, useContext, useState } from "react";

interface BookContextType {
    currentPage: number
    totalPages: number
    setCurrentPage: (currentPage: number) => void
    setTotalPages: (totalPages: number) => void
}

const BookContext = createContext({} as BookContextType)

type BookContextProviderType = {
    children: ReactNode
}

export function BookContextProvider({
    children
}: BookContextProviderType){
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    return (
        <BookContext.Provider value={{
            currentPage,
            totalPages,
            setTotalPages,
            setCurrentPage
        }}>
            {children}
        </BookContext.Provider>
    )
}

export function  useBookContext() {
    return useContext(BookContext)
}