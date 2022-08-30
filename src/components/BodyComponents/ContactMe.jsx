import { Box, Grid, Container, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './BodyStyles';
import image from '../../images/contactus.jpg';
import { RenderSectionHeading } from '../common/commonComponents';
import { RenderInputText } from '../common/FormComponent';
import ScrollAnimation from 'react-animate-on-scroll';

export default function ContactMe() {
    const classes = useStyles();
    const [state, setState] = useState({
        data: {
            firstName: "",
            email: "",
            message: ""
        },
        errors: {}
    })

    const handleOnChange = ({ target }) => {
        const { data, errors } = state;
        target.value.length <= 3 ? errors[target.name] = `${target.name} must be greater than 3 chars` : errors[target.name] = "";
        data[target.name] = target.value;
        setState({ data: data, errors: errors })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted, ", state.data);
    }

    return (
        <Box className={classes.section} id="Contact">
            <ScrollAnimation animateIn='fadeIn'>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item sm={5}>
                            <Box>
                                <img src={image} alt="about me" className={classes.responsiveImg} />
                            </Box>
                        </Grid>
                        <Grid item sm={7} className={classes.renderedObjs}>
                            {RenderSectionHeading({
                                smallTxt: "CONTACT ME",
                                heading: "Seems To Be Interesting",
                                description: "Got my Portfolio seen, than feel free to contact me for your future projects.",
                                alignCenter: false
                            }
                            )}
                            <br />
                            <form onSubmit={handleSubmit}>
                                <Grid container>
                                    <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                        {RenderInputText({ label: "First Name", name: "firstName", state: state, onChange: handleOnChange })}
                                    </Grid>
                                    <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                        {RenderInputText({ label: "Email", name: "email", state: state, onChange: handleOnChange })}
                                    </Grid>
                                    <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                        {RenderInputText({ label: "Message", name: "message", state: state, onChange: handleOnChange, multiline: true, rows: "5" })}
                                    </Grid>
                                    <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                        <Button variant="outlined" type="submit" fullWidth={true} className={classes.submitBtn}>
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </ScrollAnimation>
        </Box>
    );
}
