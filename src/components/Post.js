import React,{Component} from 'react'
import axios from 'axios'
class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            userID:'',
            title:'',
            body:''
        }
    }
    changeHandler =(e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(Response => {
            console.log(Response)
        })
        .catch(error =>{
            console.log("API not found")
        })
    }
    render(){
        const {userID,title,body}=this.state
        return (
            <div>
                <form  onSubmit={this.submitHandler}>
                    <div>USERID <input type="text" name ="userID" value={userID} onChange={this.changeHandler}/></div>
                    <div> TITLE  <input type="text" name ="title"   value={title}    onChange={this.changeHandler}/> </div>
                    <div>BODY   <input type="text" name ="body" value={body}   onChange={this.changeHandler }/> </div>
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}
export default Post