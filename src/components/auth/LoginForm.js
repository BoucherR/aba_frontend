import { useState, } from "react";
import { useHistory, useLocation, } from "react-router-dom";
import { Card, CardHeader, CardContent, CardActions, List, ListItem, Button, TextField, Typography, } from "@mui/material";

let LoginForm = (props) => {
    let [credentials, setCredentials] = useState({
        email: null,
        password: null,
    });

    let history = useHistory();
    let location = useLocation();
    let auth = props.useAuth();

    let { from } = location.state || { from: { pathname: "/" } };

    let login = () => {
        // TODO: CHECK HISTORY IS UPDATED
        // auth.signin((credentials) => {
        //   history.replace(from);
        // });

        auth.signin(credentials);
        history.replace(from);
    };

    let handleNameChange = (event) => {
        let newCred = credentials;
        newCred.email = event.target.value;

        setCredentials(newCred);
    }

    let handlePasswordChange = (event) => {
        let newCred = credentials;
        newCred.password = event.target.value;

        setCredentials(newCred);
    }

    return (
        <Card variant="Outlined" sx={{
            boxShadow: 3,
            display: 'flex',
        }}>
            <CardHeader title="Log-in" />
            <CardContent>
                <Typography>
                    LOGIN
                </Typography>
                <List>
                    <ListItem>
                        <TextField
                            required
                            variant="outlined"
                            label="Email"
                            value={credentials.email}
                            onChange={handleNameChange}
                        >
                        </TextField>
                    </ListItem>
                    <ListItem>
                        <TextField
                            required
                            type="Password"
                            variant="outlined"
                            label="Password"
                            value={credentials.password}
                            onChange={handlePasswordChange}
                        >
                        </TextField>
                    </ListItem>
                </List>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={login}>
                    Log-in
                </Button>
            </CardActions>
        </Card>
    )
}

export default LoginForm;