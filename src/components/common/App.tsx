import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react'

import * as style from './App.scss'


class App extends React.Component {
    public render() {
        return (
            <div className={style.App}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="button" color="inherit">
                            Create ToDos
                        </Typography>
                    </Toolbar>
                </AppBar> <br/>
                 
            </div>
        );
    }
}

export default App;
