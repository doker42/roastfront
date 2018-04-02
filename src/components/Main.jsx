import React from 'react'
import './../App.css'
import FormInputNews from './FormInputNews'
import NewsList from './NewsList'

import { BrowserRouter, Route, Link } from 'react-router-dom'


class Main extends React.Component{

      constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
      }

  render(){

    const formInputNews = this.state.isOpen && <div id="formnews"> <FormInputNews /> </div>
    
    return (

        <div className='main container'>

            <p>
                <button onClick={this.handleFormInputNews} className="btn btn-success">
                    { this.state.isOpen ? 'Close Form' : 'Creat News ' }
                </button>

                {/* <Link to='/newsform'>to Create News </Link> */}

            </p>
                
                {formInputNews}
                
                <NewsList />

        </div>
    )
  }
      handleFormInputNews = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Main;
