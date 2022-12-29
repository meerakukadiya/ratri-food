const weekDaysModels = require('../../models/week_days')

const createWeekDays = async(request , response) => {
   try{

    const
    {
        day_name
    } = request.body;

    const saveData = {
        day_name : day_name
    }

    const createWeekDays = await weekDaysModels.create(saveData);
    if(createWeekDays)
    {
        return response.status(200).send({status : true , message :"days created successfully" , data : createWeekDays})
    }
    else
    {
        return response.status(200).send({status : false , message :"days creating error" , data : null})
    }
   }catch(error)
   {
    return response.status(500).send({status : false , message :error.message , data : null})
   }
}

const getWeekDays = async(request , response) => {
    try{
   
    const getWeekDays = await weekDaysModels.find();
    if(getWeekDays)
    {
        return response.status(200).send({status : true , message :"days get successfully" , data : getWeekDays})
    }
    else
    {
        return response.status(200).send({status : false , message :"data not found" , data : null})
    }

    }catch(error)
    {
        return response.status(500).send({status : false , message : error.message , data : null})
    }
}

module.exports = {createWeekDays , getWeekDays}