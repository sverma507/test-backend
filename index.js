require('dotenv').config();
const express = require('express');
const D_NAME=process.env.D_NAME;
const app = express();
require("./config/dbConnection");
const cors= require('cors');
app.use(cors());
app.use(express.json());
const {AddOwner,GetOwner,DeleteOwner}=require('./controllers/ownerContoller')
const {AddGame,GetGames,DeleteGame,UpdateGame}=require('./controllers/gameController')
const {AddGameResult,GetGameResults,DeleteGameResult,getGamesResultByMonth}=require('./controllers/gameResultController')
const {AddLogin,GetLogin}=require('./controllers/loginController')

//owner
app.post('/addowner',AddOwner);
app.get('/getowner',GetOwner)
app.post('/deletemany',DeleteOwner)


//games
app.post('/addgame',AddGame)
app.get('/getgames',GetGames)
app.put('/updategame',UpdateGame)
app.delete('/deletegame',DeleteGame)


//Results
app.post('/addgameresult',AddGameResult)
app.get('/getgameresults',GetGameResults)
app.delete('/deletegameresult',DeleteGameResult)
app.get('/getgameresultsbymonth',getGamesResultByMonth)

//login
app.post('/login',GetLogin)
app.post('/addlogin',AddLogin)

app.listen(4000,()=>{
    console.log(`Server at ${D_NAME}`);
})