import classes from './Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className={classes.footer}>
                <span>Copyright @ {year}</span>
            </footer>
        </>
    )
}
export default Footer;