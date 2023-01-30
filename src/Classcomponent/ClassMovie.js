import React, {Component} from "react";

class ClassMovie extends Component {
    constructor(props) {
        super();
        this.state = {
            nytmovies:[]
        };
    }

    componentDidMount(){
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?order=by-opening-date&api-key=tts68Da7JavoQGmoMAWGWzQYfvqFpjjp")
        .then((res)=>{res.json()
        .then((nytmovies)=>{
            this.setState({nytmovies:nytmovies.results});   
            console.log(nytmovies);       
        });
    })
        .catch((err) => {
        console.log(err);
    });

    }
    
    render() { 
        return ( 
            <div>
                <h1>New York Times Movie Review</h1>
                    {this.state.nytmovies.map((nytmovie, index) =>{

                       return (
            
            <div key={index} >
              <p> {nytmovie.byline} </p>
              <p> {nytmovie.critics_pick} </p>
              <p> {nytmovie.display_title} </p>
              <p> {nytmovie.headline} </p>
            </div>
            
          );
        })}
               
            </div>
         );
    }
}
 
export default ClassMovie;




