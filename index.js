
const express = require("express")
const app = express();

app.use(express.json());

let toDoList = []

app.get("/todos", (req, res) => {
    res.status(200).json("hello world")
})

app.post("/todos", (req, res) => {
    let newData = req.body.item;
    console.log(req.body, "here is Body")
    toDoList.push(newData);
    res.status(202)
        .json(
            {
                "msg": `data is save in your dataBase  ${toDoList} `
            }
        )
    console.log(toDoList)

})

app.delete("/todos", (req,res) => {
    let deleteElementOne = req.body.item
    toDoList.find((item,index)=>{
        if (item == deleteElementOne)
        {
            toDoList.splice(index,1)
        }
    })
    res.status(202).send({
        msg : `your data is deleted array become ${toDoList}`
    })
    console.log(toDoList)
})

app.listen(8000, () => {
    console.log("Running server")
})