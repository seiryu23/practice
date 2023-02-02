import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import axios from 'axios';

export default function Form(props) {
    const [title, setTitle] = useState('');

    const funSetTitle = (e) => {
        setTitle(() => e.target.value);
    }

    const funPost = () => {
        const params = new URLSearchParams();
        params.append('title', title);
        axios.post('/api', params)
            .then(function (res) {
                props.setDisplay({
                    ...props.display,
                    title: res.data.message.title,
                    category: res.data.message.category,
                    volume: res.data.message.volume,
                    story: res.data.message.story
                });
            })
            .catch(function (error) {
                console.log("error", error);
            });
    }

    return (
        <>
            <Grid container rowSpacing={8}>
                <form>
                    <Grid item>
                        <TextField
                            label="タイトル"
                            value={title}
                            onChange={funSetTitle}
                        />
                    </Grid>                
                    <Grid item>
                        <Button color="inherit" onClick={funPost}>検索</Button>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}