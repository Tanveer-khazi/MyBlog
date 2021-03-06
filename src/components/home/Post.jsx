// @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');

import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyle=makeStyles({
    container:{
        height:350,
        margin:'10px',
        border:'1px solid black',
        borderRadius: '10px',
        display:"flex",
        alignItems:'center',
        flexDirection:'column',
        '&>*':{
            padding:'0 5px 5px 5px'
        },
       
    },
    image:{
        height:150,
        width:'100%',
        objectFit:'cover',
        borderRadius: '10px 10px 0 0'
    },
    text:{
        color:'#878787',
        fontSize: 12
    },
    heading:{
        fontSize:18,
        fontWeight:600
    },
    detail:{
        fontSize:14,
        wordBreak:'break-word'

    }
})

export default function Post() {
    const classes= useStyle();
    const url='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'

    return (
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image} />
            <Typography className={classes.text}>Music</Typography>
            <Typography className={classes.heading}>code for interview</Typography>
            <Typography className={classes.text}>Author: code for interview</Typography>
            <Typography className={classes.detail}>Hi from code for interview Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem reprehenderit voluptatum totam. Illum nam laboriosam sequi quaerat reprehenderit ad numquam similique rem, fugiat consectetur atque quos iste cumque odit sunt.</Typography>

        </Box>
    )
}
