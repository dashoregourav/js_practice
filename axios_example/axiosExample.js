const axios=require('axios');
axios.get('https://fakestoreapi.com/products/categories').then(function(response){
    // console.log(response);
    console.log(response.data);
})
.catch(function(error){
    console.log(error);
})