import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
//browser allow us to change history
const NewQuotes = () => {
    const history = useHistory()
    const addQuoteHandler = (quoteData) => {
        console.log(quoteData)
        history.push('/quotes')
    }
    return (
        <>
            <h1>React</h1>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </>
    )
}
export default NewQuotes;