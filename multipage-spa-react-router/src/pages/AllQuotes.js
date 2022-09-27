import QuoteList from "../components/quotes/QuoteList";
const Dummy_Quotes = [
    { id: "q1", author: "Max", text: "Learning React is fun!" },
    { id: "q2", author: "Max2", text: "Learning React is great!" }
]
const AllQuotes = () => {
    return (
        <>
            {/* <h1>In All Quotes page...</h1> */}
            <QuoteList quotes={Dummy_Quotes} />
        </>
    )
}
export default AllQuotes;