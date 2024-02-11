import { useRoute } from "@react-navigation/native";
import { Icon, Pressable, Text, View } from "native-base";
import { BookType } from "../dtos/book";
import { AntDesign } from '@expo/vector-icons'
import Header from "../components/molecules/Header";
import Book from "../components/molecules/Book";
import { useState } from "react";
import { BookContextProvider, useBookContext } from "../context/BookContext";


type RoutesParams = {
    book: BookType;
}

function BookPageComponent() {
    const {currentPage, totalPages, setCurrentPage, setTotalPages} = useBookContext()

    const route = useRoute();
    const { book } = route.params as RoutesParams;

    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    function handlePreviousPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <>
            <Header
                title={book.title}
            />
            <View className="flex-1 items-center justify-center bg-white">
                <Book 
                    book={book}
                />
                <View className="flex flex-row justify-between items-center bg-black w-1/2 p-4 rounded-full mb-5">
                    <Pressable
                        onPress={handlePreviousPage} className="active:scale-95"
                    >
                        <Icon
                            as={AntDesign}
                            name="left"
                            size={4}
                            color="white"
                        />
                    </Pressable>
                    <Text className="text-white">
                        {currentPage}{` `}
                        <Text className="text-gray-400">
                            / {totalPages}
                        </Text>
                    </Text>
                    <Pressable
                        onPress={handleNextPage} className="active:scale-95"
                    >
                        <Icon
                            as={AntDesign}
                            name="right"
                            size={4}
                            color="white"
                        />
                    </Pressable>
                </View >
            </View >
        </>
    )
}

export default function BookPage(){
    return (
        <BookContextProvider>
            <BookPageComponent />
        </BookContextProvider>
    )
}