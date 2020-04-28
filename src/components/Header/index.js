import React, {Component} from 'react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import axios from 'axios';

export default class Header extends Component {

    state = {
        keyword: "",
    };

    handleChangeInput(value){
        this.setState({keyword: value});
        this._debounce(value);
        this.keywordLogInsert(value);
    }

    _debounce = _.debounce(value => {
        this.props.onSerchYoutube(value);
    },200);

    keywordLogInsert(value){
        axios.post('http://localhost:9094/log', {keyword: String(value)})
        .catch(() => {
            console.log('通信に失敗しました');
        });
    }

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