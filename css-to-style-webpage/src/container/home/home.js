import React from 'react'
import { convertCss } from 'css-to-typestyle'
import TextField from '@material-ui/core/TextField'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            css:`body {
                font-size:14px;
            }`,
            typestyle:`import { cssRule, fontFace } from 'typestyle'
                cssRule('body', {
                    "fontSize": "14px"
                        }
                )`
        }
        this.handleChange = this.handleChange.bind(this)
    }
    async handleChange(v){
        this.setState({
            css:v.target.value
        })
        try {
            this.setState({
                typestyle:await convertCss(`${v.target.value}`)
            })
        }catch(error){
            this.setState({
                typestyle:"Incorrect css code!"
            })
        }

    }
    render(){
        return (
            <div>
                <TextField
                    id="outlined-full-width"
                    label="Paste your css code here"
                    style={{ margin: 8 }}
                    value={this.state.css}
                    helperText=""
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={v=>this.handleChange(v)}
                    multiline={true}
                    rows={20}
                />
                <TextField
                    id="outlined-full-width"
                    label="Here is typestyle code"
                    style={{ margin: 8 }}
                    value={this.state.typestyle}
                    placeholder="Placeholder"
                    helperText=""
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    disabled={true}
                    multiline={true}
                    rows={20}
                />
                <p>Copyright ©<a href="https://github.com/assmdx">assmdx</a></p>
            </div>
        )
    }
}

export default Home
