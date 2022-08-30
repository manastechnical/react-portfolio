import { Box, Typography, Grid, Avatar } from '@material-ui/core';
import { useStyles as BodyStyles} from '../BodyComponents/BodyStyles';
import { useStyles } from '../Headers/HeaderStyles';

export const Decorator = ({ label, withIcon, Icon, styles }) => {
    const classes = useStyles();
    return (<Box className={classes.decorator} style={styles}>
        <Box className={classes.decoratorText}>
            {label}
        </Box>
        {withIcon ? <Typography component="span" className={classes.arrow}>
            {Icon}
        </Typography> : null}
    </Box>)

}

export const Divider = ({style}) => {
    const classes = BodyStyles();
    return <div className={classes.divide} style={style}></div>
}

export const RenderSectionHeading = ({ smallTxt, heading, description,alignCenter }) => {
    const classes = BodyStyles();
    return (<Box className={classes.sectionHeadingCont}>
        {/* decorator */}
        {Decorator({ 
            label: smallTxt, 
            withIcon: false, 
            styles: alignCenter ? {width:"100px", margin:"10px auto"} : {} 
            })
        }

        {/* heading */}
        <Typography variant="h4" align={alignCenter ? "center" : "left"} className={classes.sectionHeading}>
            {heading}
        </Typography>   

        {/* line */}
        {Divider({style: alignCenter ? {margin:"16px auto"} : {margin:"16px 0px"}})}  
        
        {/* desc */}                                  
        <Typography variant="body1" component="h6" className={classes.sectionDesc}>
            {description}
        </Typography>   
    </Box>)
};

export const CardMedia = ({label,icon,desc,key}) => {
    const classes = BodyStyles();
    return (
        <Grid container style={{marginTop:"20px"}}>
            <Grid item xs={3} className={classes.AvatarCont}>
                <Avatar className={classes.avatar}>{icon}</Avatar>
            </Grid>
            <Grid item xs={9} className={classes.MediaText}>
                <Typography variant="body1" component="h6">{label}</Typography>
                <Typography variant="caption">{desc}</Typography>
            </Grid>
        </Grid>
    );
}