import {db} from "../../firebaseConfig.tsx";
import { ref, get } from "firebase/database";

export type Book = {
    id: string,
    author: string,
    image: string,
    price: number,
    title: string,
}


export async function fetchBooks(): Promise< Book[] | null> {
    const booksRef = ref(db, "products"); // 'products' - это путь к вашей коллекции

    try {
        const snapshot = await get(booksRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            return Object.values(data); // Выводит список тайтлов в консоль
        } else {
            return null
        //     console.log('No data available');
        }
    } catch (error) {
        // console.error(error);
        return null
    }
}