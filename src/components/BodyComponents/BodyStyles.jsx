import { makeStyles } from "@material-ui/core";
import { Theme } from '../Theme';

export const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: Theme.color.base1,
        padding: theme.spacing(10, 0, 8, 0),
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        }
    },
    sectionDark:{
        backgroundColor:Theme.color.primary1,
        height:"100%",
        width:"100%"
    },
    divide: {
        width: "64px",
        height: "4px",
        backgroundColor: Theme.color.primary,
    },
    sectionHeadingCont:{
        color:Theme.color.base2,
        padding:theme.spacing(1),
    },
    sectionHeading:{
        // color:Theme.colors.base2,
        margin:theme.spacing(1,0)
    },
    // sectionDesc:{
        
    // },
    AvatarCont:{
        display:"flex",
        flexFlow:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    avatar:{
        backgroundColor:Theme.color.primary,
        color:Theme.color.base2,
    },
    MediaText:{
        color:Theme.color.base2,
    },  
    // Portfolio section 
    imgsPortfolio:{
        position:"relative",
        "&:hover $imageOverlay":{
            opacity:1
        },

    },
    imageOverlay:{
        position:"absolute",
        width:"100%",
        height:"100%",
        top:0,
        left:0,
        backgroundColor:Theme.color.primary,
        color:Theme.color.base2,
        display:"flex",
        flexBox:"column wrap",
        justifyContent:"center",
        alignItems:"center",
        opacity:0,
        transition:"0.8s"
    },
    overlayTitle:{
        fontSize:"2rem",
        position:"absolute",
        marginBottom:"16px",
        [theme.breakpoints.down('xs')]:{
            fontSize:"0.8rem",
        }
    },
    visit:{
        position:"absolute",
        width:"100%",
        height:"100%",
        top:0,
        left:0,
        backgroundColor:Theme.color.primary,
        color:Theme.color.base2,
        display:"flex",
        flexBox:"column wrap",
        justifyContent:"center",
        alignItems:"center",
        opacity:0,
        transition:"0.8s",
        fontSize:"2rem",
        marginBottom:"16px",
    },
    responsiveImg:{
        width: "100%",
        height: "auto",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            height: "90%",
        }
    },
    renderedObjs:{
        [theme.breakpoints.up("lg")]: {
            margin:"100px 0px"
        }
    },
    submitBtn:{
        backgroundColor:Theme.color.primary,
        color:Theme.color.base2,
        "&:hover":{
            backgroundColor:Theme.color.primary1
        }
    },
    // footer style
    footerContainer:{
        backgroundColor:Theme.color.primary1,
        color:Theme.color.base2,
        padding:theme.spacing(2),
        position:"relative",
    },
    iconButton:{
        position:"absolute",
        right:5,
        top:-25,
        backgroundColor:Theme.color.primary,
        color:Theme.color.base2,
    }
}));