import axios from 'axios'

const baseURL = "https://todo-app-hure.onrender.com"

const getAllToDo = (setToDo) => {
    axios
        .get(baseURL)
        .then(({data}) => {
            console.log('data--> ', data);
            setToDo(data);
        })
        .catch((error) => {
            console.error('Error fetching todos:', error);
        });
};

const addToDo = (text, setText, setToDo) => {
    axios  
        .post(`${baseURL}/save`, {text})
        .then((data) => {
            console.log(data);
            setText("");
            getAllToDo(setToDo);
        })
        .catch((error) => {
            console.error('Error adding todo:', error);
        });
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios  
        .post(`${baseURL}/update`, {_id: toDoId, text})
        .then((data) => {
            setText("");
            setIsUpdating(false);
            getAllToDo(setToDo);
        })
        .catch((error) => {
            console.error('Error updating todo:', error);
        });
}

const deleteToDo = (_id, setToDo) => {
    axios  
        .post(`${baseURL}/delete`, {_id: _id})
        .then((data) => {
            getAllToDo(setToDo);
        })
        .catch((error) => {
            console.error('Error updating todo:', error);
        });
}

export{getAllToDo, addToDo, updateToDo, deleteToDo};