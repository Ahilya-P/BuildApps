import classes from "./QuoteList.module.css";
import QuoteItem from "./QuoteItem";
import { useHistory, useLocation } from "react-router";

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        }
        else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    })
}
const QuoteList = (props) => {
    const history = useHistory();
    const location = useLocation();
    console.log(location)
    const queryParams = new URLSearchParams(location.search)
    const isSortAscending = queryParams.get('sort') === 'asc'
    const changeSortingHandler = () => {
        history.push('/quotes?sort=' + (isSortAscending ? 'desc' : 'asc'))
    }

    const sortedQuotes =sortQuotes(props.quotes ,isSortAscending)
    return (
        <>
            <div className={classes.sorting}>
                <button onClick={changeSortingHandler}>Sort {isSortAscending ? 'Descending' : 'Ascending'}</button>
            </div>
            <ul className={classes.list}>
                {sortedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    ></QuoteItem>
                ))}
            </ul>
        </>
    )
}
export default QuoteList