import { useEffect, useState } from "react"
import { Dimensions } from "react-native"
import Pdf from "react-native-pdf"
import { useBookContext } from "../../context/BookContext"
import { BookType } from "../../dtos/book"
import { setLastBookReadInStorage, updateLastPageReadInStorage, updateTotalPagesInStorage } from "../../storage/storageLastBookRead"

interface BookProps {
    book: BookType
}
export default function Book({
    book
} : BookProps){
    const {currentPage, setCurrentPage, setTotalPages, totalPages} = useBookContext()

    const [lastPageRead, setLastPageRead] = useState<number>(0)

    async function setLastBookRead(book: BookType) {
        await setLastBookReadInStorage(book)
    }

    async function updatePagesLastBookRead(lastPage: number, totalPages: number) {
        await updateLastPageReadInStorage(lastPage)
        await updateTotalPagesInStorage(totalPages)
    }

    useEffect(() => {
        setLastBookRead(book)
        setTotalPages(book.totalPages)
        setLastPageRead(book.lastPageRead)
        setCurrentPage(book.lastPageRead)
    }, [book])


    return(
        <Pdf
            source={{uri: '../../assets/Quatro-Passos-para-o-Perdao-William-Fergus-Martin.pdf', cache: true}}
            // source={book.bookURL}
            style={{ flex: 1, width: Dimensions.get('window').width, backgroundColor: '#fff' }}
            horizontal={true}
            page={currentPage}
            showsHorizontalScrollIndicator={false}
            enablePaging={true}
            onPageChanged={async (page, pageCount) => {
                await updatePagesLastBookRead(page, pageCount)
                setCurrentPage(page)
                setTotalPages(pageCount)
                console.log(`current page: ${page}/${pageCount}`);
            }}
        />
    )
}