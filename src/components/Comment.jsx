import React from 'react'
import './../App.css'
import './css/comment.css'

class Comment extends React.Component{

//   constructor(props){
//     super(props)
//   }

  render(){

    const { data } = this.props
    
    return (

        <div className='commentitem container'>

          <div className="card-body">

            <h5 className="card-title text-left grey">User Name: {data.username}</h5>

            <p className="card-text text-left">Text: {data.text}</p>  

            <p className="card-text text-right commentdate">Comment created: {data.created_at}</p>   

          </div>

        </div>
    )
  }

}

export default Comment;