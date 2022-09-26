import classes from './NoQuotesFound.module.css'

const NoQuotesFound = () =>{
    return(
        <>
        <div className={classes.noquotes}>
            <p>No Quotes Found</p>
            <a className="btn">
                Add a Quotes...
            </a>
        </div>
        </>
    )
}
export default NoQuotesFound;