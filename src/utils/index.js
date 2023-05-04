import { writeCookie } from "../common";

export const addTodo = async ( todo, jwtToken ) => {
    try {
        const response = await fetch("http://localhost:5001/activetodos/addtodo", {
            method:"POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            },
            body: JSON.stringify({
                "todo": todo
            })
        });
        if (response.status === 401) {
            const notAuthorized = {
                message: "User not authorized"
            };
            throw new Error(notAuthorized);
        }
        else if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        };
        const data = await response.json()
        newTodo(data.user.todo);
        // look at cookies and see if they're required
        writeCookie("jwt_token", data.user.token, 7);
        res.status(201).json({message: "success", todo: data.user.todo});
    } catch (error) {
        // ADD 501 Error 
        throw new Error(error.message);
    }
};


export const addDoneTodo = async ( todo, jwtToken ) => {
    try {
        const response = await fetch("http://localhost:5001/donetodos/adddonetodo", {
            method:"POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            },
            body: JSON.stringify({
                "todo": todo
            })
        });
        if (response.status === 401) {
            const notAuthorized = {
                message: "User not authorized"
            };
            throw new Error(notAuthorized);
        }
        else if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
        const data = await response.json()
        newDoneTodo(data.user.todo);
        // look at cookies and see if they're required
        writeCookie("jwt_token", data.user.token, 7);
        res.status(201).json({message: "success", todo: data.user.todo});
    } catch (error) {
        // ADD 501 Error 
        throw new Error(error.message);
    }
};

export const deleteActiveTodo = async ( todo, jwtToken ) => {
    try {
        const response = await fetch("http://localhost:5001/activetodos/deleteactivetodo", {
            method:"DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            },
            body: JSON.stringify({
                "todo": todo
            })
        });
        if (response.status === 401) {
            const notAuthorized = {
                message: "User not authorized"
            };
            throw new Error(notAuthorized);
        }
        else if (response.status === 404) {
            const notFound = {
                message: "Todo not found"
            };
            throw new Error(notFound);
        }
        else if (!response.ok) {
            throw new Error("User not Authorized");
          }
        const data = await response.json()
        newTodo(data.user.todo);
        // look at cookies and see if they're required
        writeCookie("jwt_token", data.user.token, 7);
        res.status(201).json({message: "success", todo: data.user.todo});
    } catch (error) {
        // ADD 501 Error 
        throw new Error(error.message);
    }
};
