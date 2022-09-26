import { Route, useParams } from "react-router";
import Comments from '../components/comments/Comments';

const QuotesDetails = () => {
    const params = useParams()
    return (
        <>
            <h1>In  Quotes Details page...</h1>
            <span>{params.quotesId}</span>
            <Route path={`/quotes/${params.quotesId}/comments`}>
                <Comments />
            </Route>
        </>
    )
}
export default QuotesDetails;