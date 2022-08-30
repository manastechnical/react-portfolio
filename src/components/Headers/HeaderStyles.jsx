import { makeStyles } from '@material-ui/core';
import { Theme } from '../Theme';
import bbimage from '../../images/brandBanner.jpg';

export const useStyles = makeStyles((theme) => (
    {
        HeaderWraper: {
            height: "auto",
            minHeight: "90vh",
            width: "100%",
            background: `linear-gradient(to bottom right, #04303140, #00606473), url(${bbimage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        },
        Headercontainer: {
            height: "auto",
            minHeight: "90vh",
            width: "85%",
            color: Theme.color.base2,
            padding: "20px",
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "center",
            fontFamily: "roboto"
        },
        headerTitle: {
            fontSize: "3.7rem",
            margin:theme.spacing(1,0),
            [theme.breakpoints.down("xs")]: {
                fontSize: "2.5rem",
            }
        },
        headerDesc: {
            fontSize: "2.4rem",
            margin:theme.spacing(1,0),
            [theme.breakpoints.down("xs")]: {
                fontSize: "1.7rem",
            }
        },
        navbar: {
            color: Theme.color.base2
        },
        toolbar: {
            backgroundColor: Theme.color.base1,
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between"
        },
        navlink: {
            color: Theme.color.base2
        },
        decorator: {
            display: "flex",
            fontWeight: "bold",
            fontFamily: "roboto",
            "&:before": {
                width: "45px",
                height: "45px",
                backgroundColor: Theme.color.primary,
                content: '""',
                borderRadius: "50%"
            }
        },
        decoratorText: {
            fontSize:"1.2rem",
            // lineHeight: "40px",
            position: "absolute",
            margin:"10px",
            fontWeight:"bold",
            color:Theme.color.base2,
        },
        arrow: {
            lineHeight: "48px",
            position: "absolute",
            left: "110px",
            animationName: "upDown",
            animationDuration: "1s",
            animationIterationCount: "infinite"
        },

        '@global': {
            "@keyframes upDown": {
                "0%": {
                    transform: "scale(0)",
                    paddingTop: "0px"
                },
                "100%": {
                    transform: "scale(1)",
                    paddingTop: "10px"
                },
            }
        },
        drawer:{
            width:"250px",
            height:"100vh",

        },
        drawerContainer:{
            width:"250px",
            height:"100vh",
            backgroundColor:Theme.color.primary1
        },
        listItem:{
            color:Theme.color.base2,
        }
    }
))