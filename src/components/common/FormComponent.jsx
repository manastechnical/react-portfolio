import { makeStyles, TextField } from "@material-ui/core"
import { Theme } from "../Theme";
import React from "react";

const useStyles = makeStyles((theme)=>({
    cssLabel:{
        color:"#d3d3d3",
        "&.Mui-focused":{
            color:Theme.color.primary
        }
    },
    cssOutlinedInput:{
        "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":{
            borderColor:Theme.color.base2,
            opacity:0.5
        },
        "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline":{
            borderColor:Theme.color.base2,
            opacity:1
        },
        "&$cssFocused $notchedOutline":{
            borderColor:Theme.color.primary,
            color:Theme.color.primary,
        },
    },
    notchedOutline:{},
    cssFocused:{},
    error:{},
    disabled:{},
}))

export const RenderInputText = ({name,label,state, onChange, multiline, rows}) => {
    const {data,errors} = state;
    const classes = useStyles();
    return <TextField
    InputLabelProps={{
        classes:{
            root:classes.cssLabel,
            focused:classes.cssFocused
        }
    }}
    InputProps={{
        classes:{
            root:classes.cssOutlinedInput,
            focused:classes.cssFocused,
            notchedOutline:classes.notchedOutline
        }
    }}
    variant="outlined"
    label={label}
    fullWidth={true}
    name={name}
    value={data[name]}
    error={errors[name] ? true : false}
    helperText={errors[name]}
    onChange={onChange}
    multiline={multiline}
    rows={rows}
    />
}