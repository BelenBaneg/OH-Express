"use strict";

const express = require("express");
//Did you call the express.Router() method?
//Your code here:
//
const router = express.Router();


//Did you import the ShoppingList model?
//Your code here:
//
const shoppingList = require("../models/shoppingList.js")

// GET all users
//Your code here:
//
router.get("/users", (req, res)=>{
   const users = shoppingList.users(); 
   res.send(users)
});

// GET all items for a specific user
router.get("/users/:name/items", (req, res) => {
  //Here is a little help... You have the url for this route already set up
  //Your code here:
  //
  console.log("soy el PARAMS", req.params)
  const especific = shoppingList.list(req.params.name);
  res.send(especific)
});

// POST an item for a specific user
router.post("/users/:name/items", (req, res) => {
  //Your code here:
  //
  const name = req.params.name;
  console.log("soy el body", req.body);
  //descont.
  //soy el body { item: 'milk' }
  const { item } = req.body;
  //const item = req.body.item
  const add = shoppingList.add(name, item)
  res.status(201).send(add);
});

// PUT (update) an item for a specific user by index
router.put("/users/:name/items/:index", (req, res) => {
  //Your code here:
  
  console.log("PARAMS", req.params);
  //PARAMS { name: 'toni', index: '0' }
  const name = req.params.name;
  const index = req.params.index;
  console.log(req.body);
  const { item } = req.body;

  //(name, index, item) 
  const shopping = shoppingList.update(name, index, item);
  res.status(200).send(shopping);

});

// DELETE an item for a specific user by index
router.delete("/users/:name/items/:index", (req, res) => {
  //Your code here:
  //
  //(name, index) 
  const { name, index} = req.params;
  const rem = shoppingList.remove(name, index);
  res.status(204).send(rem);
});



module.exports = router;
