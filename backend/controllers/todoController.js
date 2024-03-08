const ToDoModel = require('../models/todoModel');

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find(); 
    res.send(todo);
}

module.exports.saveToDo = async (req, res) => {
    const {text} = req.body;

    ToDoModel
        .create({text})
        .then((data) => {
            console.log("Added succesfully");
            console.log(data);
            res.send(data);
        })
}

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;

    try {
        const updatedTodo = await ToDoModel.findByIdAndUpdate(
            _id,
            { text: text },
            { new: true }   
        );

        if (!updatedTodo) {
            return res.status(404).send("ToDo not found");
        }

        res.send("Updated successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};


module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body;
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted succesfully"))
        .catch((err) => console.log(err));
}