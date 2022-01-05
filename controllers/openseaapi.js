// import React, { Component } from 'react';
// import axios from 'axios';

// // Components
// // import NftAsset from './NftAsset';

// class NftPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             assets: [],
//         }
//     }

//     // Will only allow one API call at a time when needed. Or else will keep hitting API many times. 
//     componentDidMount() {
//         axios.get('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20')
//             .then((response) => {
//                 // console.log('PROPS: ', this.props.collection);
//                 console.log('RESPONSE: ', response.data);
//                 this.setState({
//                     assets: response.data.assets
//                 })
//             })
//             .catch((err) => {
//                 console.log('ERROR hitting api', err);
//             })
//     }

//     displayAssets() {
//         const display = this.state.assets.map((a, idx) => {
//             return <NftAsset
//                 key={idx}
//                 name={a.name}
//                 floor_price={a.floor_price}
//                 supply={a.supply}
//                 seven_day_sales={a.seven_day_sales}
//                 thirty_day_sales={a.thirty_day_sales}
//                 slug={a.slug}
//                 description={a.description}
//             />
//         })

//         return display;
//     }

//     render() {
//         return (
//             <div>
//                 <div class="navbar is-inline-flex is-transparent">
//                     <div class="navbar-brand">
//                         <a class="navbar-item">
//                             <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma" />
//                         </a>
//                     </div>
//                     <div class="navbar-menu">
//                         <div class="navbar-item">
//                             <div class="control has-icons-left">
//                                 <input class="input is-small has-text-centered" type="text" placeholder="search" />
//                                 <span class="icon is-left is-small">
//                                     <i class="material-icons">search</i>
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="navbar-item is-flex-touch">
//                         <a class="navbar-item">
//                             <i class="material-icons">explore</i>
//                         </a>
//                         <a class="navbar-item">
//                             <i class="material-icons">favorite_border</i>
//                         </a>
//                         <a class="navbar-item">
//                             <i class="material-icons">person_outline</i>
//                         </a>
//                     </div>
//                 </div>
//                 <div class="columns body-columns">
//                     <div class="column is-half is-offset-one-quarter">
//                         {/* Add NftAsset Component Here */}
//                         {this.displayAssets()}

//                         <footer class="footer">
//                             <div class="container is-fluid">
//                                 <div class="content has-text-centered">
//                                     <p>
//                                         <strong>Bulma</strong> by
//                                         <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
//                                         <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
//                                         <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
//                                     </p>
//                                 </div>
//                             </div>
//                         </footer>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NftPage;