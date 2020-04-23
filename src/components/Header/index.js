import React, {Component} from 'react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

export default class Header extends Component {

    state = {
        keyword: "",
    };

    handleChangeInput(value){
        this.setState({keyword: value});
        this._debounce(value)
    }

    _debounce = _.debounce(value => {
        this.props.onSerchYoutube(value);
    },200);

    render() {
        return (
            <div style={{marginTop: '20px', textAlign:'center'}}>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!e.target[0].value) { 
                    return
                    }
                    this.handleChangeInput(e.target[0].value)
                }}>
                    <TextField id="seachKeyword"/>
                    <Button variant="contained" color="primary" type="submit" >
                        SEARCH
                    </Button> 
                </form>
            </div>
        )
    }
}