import React, { createContext, useContext, useState, useEffect } from 'react'
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

export default function Form(props) {
    const [id, setTitle] = useState('');
    const [dispData, setDispData] = useState([]);
    const ContentContext = createContext();

    const dispManyData = () => {
        setDispData ([
            ...dispData,
            {
                id: 0,
                username: "",
                mail_address: "",
                belongCode: 0,
                areaCode: 0
            }
        ]);
    }

    const funSetTitle = (e) => {
        setTitle(() => e.target.value);
    }

    useEffect(()=>{
        const params = new URLSearchParams();
        params.append('id', id);
        fetch('/api', params)
            .then((res) => res.json())
            .then((data) => dspData(data));
/*
            props.setDisplay({
                ...props.display,
                id: data[0].id,
                username: data[0].username,
                mail_address: data[0].mail_address,
                belongCode: data[0].belongCode,
                areaCode: data[0].areaCode
            });
*/
    }, []);
    const funPost = () =>
    {
        console.log('');
    }

    const dspData = (data) =>
    {
        for (var d of data)
        {
            console.log(d);
            setDispData({...dispData,
                        id: d.id,
                        username: d.username,
                        mail_address: d.mail_address,
                        belongCode: d.belongCode,
                        areaCode: d.areaCode
            });
        }
    }
/*
    const funPost = () => {
        const params = new URLSearchParams();
        params.append('id', id);
        fetch('/api', params)
        .then(function (res) {
            Array.prototype.forEach(element => {
                props.setDisplay({
                    ...props.display,
                    id: element.id,
                    username: element.username,
                    mail_address: element.mail_address,
                    belongCode: element.belongCode,
                    areaCode: element.areaCode
                });    
            res.json();
            props.setDisplay({
                ...props.display,
                id: res.id,
                username: res.username,
                mail_address: res.mail_address,
                belongCode: res.belongCode,
                areaCode: res.areaCode
            });
        })
        .then((data) =>{
            console.log(data);
        })
        .catch(function (error) {
            console.log("error", error);
        });
    }
*/

    return (
        <>
            <Grid container rowSpacing={8}>
                <form>
                    <Grid item>
                        <TextField
                            label="ID"
                            value={id}
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