import React, { Component } from 'react';
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Dashboard extends Component {
   constructor(){
       super()
       this.state = {
           houses: []
       }
       
       this.deleteHouse = this.deleteHouse.bind(this)
   }

   componentDidMount(){
      this.getHouses()
   }

   getHouses = () =>{
       axios.get('/api/houses')
       .then(res => {
           console.log(res.data)
           this.setState({
               houses: res.data
           })
       }).catch(err => console.log('AXIOS GET ERR', err))
   }

   deleteHouse(id){
        axios.delete(`/api/houses/${id}`)
          .then(() => this.getHouses())
          .catch(err => console.log('AXIOS DELETE ERR', err))
        }



 render() {
   return (
     <div>
         Dashboard
         <Link to='/wizard'><button>Add New Property</button></Link>
         {this.state.houses.map((item, i) => {
               return <House deleteHouse={this.deleteHouse}
               key={i} house={item} id={item.id}/>
         })}
     </div>
   );
 }
}

export default Dashboard





















// BELOW WAS NOT WORKING AND REDID UP TOP. FIGURE OUT ERROR BELOW LATER


// import React, { Component } from 'react';
// import House from '../House/House'
// import {Link} from 'react-router-dom'
// import axios from 'axios';

// class Dashboard extends Component {
//   constructor(){
//     super()  
//     this.state ={
//       houses: []  
//     }
//     // this.getHouses = this.getHouses.bind(this)
//   }

//   componentDidMount() {
//     axios.get('/api/houses')  
//       .then(res => {
//         console.log('RESDATA', res.data)  
//         this.setState({
//             houses: res.data  
//         }
//       )
//     })
//   .catch(err => console.log('Component DID NOT mount', err))
// }




//   render() {
//     let homes = this.state.houses.map((item, i)=>{
//       return <House key={i} item={item}/>  
//     })

//     return (
//       <div >  
//         Dash
//         <House></House>
//         <Link to={'/wizard'}>
//           <button>Add New Property</button>
//         </Link>
//         {homes}
//       </div>
//     );
//   }
// }

// export default Dashboard;


