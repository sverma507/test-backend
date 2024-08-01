
const owner = require('../models/owner_info_Schema');
const AddOwner = async (req, res) => {
    try {
        console.log("req.body=>", req.body);
        const result = await owner.create(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error('Error adding owner', error);
        res.status(500).send("Error adding owner ");
    }
};

const GetOwner=async (req,res)=>{
    const result=await owner.find();
    if(result)
    {
        res.status(201).send(result);
    }
    else
    {
        res.status(500).send("Error adding owner ");
    }
}

const DeleteOwner=async()=>{
    await owner.deleteMany({});
}

module.exports = {AddOwner,GetOwner,DeleteOwner};


