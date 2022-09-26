import classes from './LayoutMain.module.css';
import MainNavigation from './MainNavigation';

const LayoutMain = (props) => {
    return (
        <>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </>
    )
}
export default LayoutMain;