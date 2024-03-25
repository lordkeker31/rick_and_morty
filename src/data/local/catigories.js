import charaptersImage from '../../assets/charapters.jpg';
import locationImage from '../../assets/location.png';
import epizodesImage from '../../assets/epizodes.png';
import { v4 } from "uuid";

let catigories = [
    {
        id: v4(),
        image: charaptersImage,
        title: "Персонажи",
        description: "Зайди и познакомься со всеми персонажами вселенной",
        href: "/charapters"
    },
    {
        id: v4(),
        image: locationImage,
        title: "Локации",
        description: "Исследуй все локации. Давай же, не будь занудой!",
        href: "/locations"
    },
    {
        id: v4(),
        image: epizodesImage,
        title: "Эпизоды",
        description: "Узнай чуть больше о карте приключений Рика и Морти",
        href: "/epizodes"
    }
]

export default catigories