import {useEffect, useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Book, fetchBooks} from "./firebase/firebase.tsx";
import { TemplateCard } from './TemplateCard/TemplateCard.tsx';

function App() {
  const [books, setBooks] = useState<null | Book[]>(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const bdBooks = await fetchBooks();
                setBooks(bdBooks);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [])

  return (
    <>
        {books?.map(book => <TemplateCard book={book} />)}
    </>
  )
}

export default App
