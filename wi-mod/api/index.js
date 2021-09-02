var item_data={
    "items":[
  {
          "name": "Ruth",
          "job": "programmer"
        },
        {
          "name": "Miut",
          "job": "contacter"
        }
  
  ]
  }
  
  module.exports=(req,res)=>{
    res.json(item_data);
  }
  