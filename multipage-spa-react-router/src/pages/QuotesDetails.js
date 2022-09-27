import { Route, useParams, useRouteMatch } from "react-router";
import Comments from '../components/comments/Comments';
import HighLightedQuote from '../components/quotes/HighLightedQuote'
import { Link } from "react-router-dom";

const Dummy_Quotes = [
    { id: "q1", author: "Max", text: "Learning React is fun!" },
    { id: "q2", author: "Max2", text: "Learning React is great!" }
]
const QuotesDetails = () => {
    const match = useRouteMatch()
    const params = useParams();
    const quote = Dummy_Quotes.find((quote) => quote.id === params.quotesId)
    if (!quote) {
        return <p>No Quotes Found....</p>
    }
    return (
        <>
            <HighLightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.quotesId}/comments`}>Load Comment</Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    )
}
export default QuotesDetails;