import React , {Component} from 'react';
class Myjsx extends Component{

    render(){
        return [
                <h1>This is from jsx component </h1>,
                <h2> This si jsx second element </h2>
               ]
    }
}


export default Myjsx;
/*
    1. if single element(tag), then no need to follow parent tag 
        As :  <h1>This is from jsx component </h1>
    2. if more than 1 element then it shoud be inclosed within a parent tag
        2.a : 
               <div>
                <h1>This is from jsx component </h1>
                <h2> This si jsx second element </h2>
               </div>

        2.b  :
                <>
                     <h1>This is from jsx component </h1>
                     <h2> This si jsx second element </h2>
                </>
        3.c :
                [
                     <h1>This is from jsx component </h1>,
                     <h2> This si jsx second element </h2> 
                ]
*/
