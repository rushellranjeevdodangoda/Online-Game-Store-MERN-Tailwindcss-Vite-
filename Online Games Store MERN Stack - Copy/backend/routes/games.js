const express=require('express')
const router=express.Router()
const Game = require('../models/Game')

//Get games
router.get("/",async (req,res)=>{
    try{
      const games = await Game.find().exec();
      //const {password,...info} = user._doc
      res.status(200).json(games);
    }
    catch(err){
      res.status(500).json(err);
    }
  })

  // add games
router.post("/", async (req, res) => {
  try {
    const { title, price, image } = req.body;
    const newGame = new Game({ title, price, image });
    const savedGame = await newGame.save();
    res.status(200).json(savedGame);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports=router