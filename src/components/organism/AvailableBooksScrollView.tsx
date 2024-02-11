import { ScrollView } from "native-base";
import { AntDesign } from '@expo/vector-icons'
import BookBox from "../molecules/BookBox";

interface AvailableBooksScrollViewProps {

}
export default function AvailableBooksScrollView(props: AvailableBooksScrollViewProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-2"
        >
            <BookBox
                book={{
                    id: "1",
                    srcImage: "https://fapesc.sc.gov.br/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-21-at-17.47.44.jpeg",
                    title: "fapesc",
                    autor: "Julibio",
                    rate: "4.5",
                    bookURL: require('../../assets/Quatro-Passos-para-o-Perdao-William-Fergus-Martin.pdf')
                }}
            />
            <BookBox
                book={{
                    id: "2",
                    title: "Teste",
                    autor: "Jojo",
                    rate: "5.0",
                    srcImage: "https://fapesc.sc.gov.br/wp-content/uploads/2022/01/banner-lateral_plataforma.jpg",
                    bookURL: require('../../assets/Quatro-Passos-para-o-Perdao-William-Fergus-Martin.pdf')
                }}
            />
            <BookBox
                book={{
                    id: "3",
                    title: "fapesc",
                    autor: "Julibio",
                    rate: "4.0",
                    srcImage: "https://fapesc.sc.gov.br/wp-content/uploads/2022/01/banner-lateral_plataforma.jpg",
                    bookURL: require('../../assets/Quatro-Passos-para-o-Perdao-William-Fergus-Martin.pdf')
                }}
            />
        </ScrollView>
    )
}