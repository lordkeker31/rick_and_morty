import { v4 } from "uuid";

let navigation_links = [
    {
        text: "Главная",
        href: "/",
        id: v4()
    },
    {
        text: "О проекте",
        href: "/about",
        id: v4()
    }
]

export default navigation_links