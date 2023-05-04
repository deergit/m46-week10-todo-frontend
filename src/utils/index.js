export const registerUser = async (username, password) => 
{
    try 
    {
        const response = await fetch
        ("http://localhost:5001/users/register", 
            {method: "POST"
            ,headers:{"Content-Type" : "application/json"}
            ,body: JSON.stringify(
                {"username": username
                ,"password": password
                })
            }
        )
        const data = await response.json()
        console.log(data)
    } 
    catch (error) 
    {
        console.log('Register User error : ' + error.message)
    }
}

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
        const successMessage = {
            message: "success",
            todo: {
              id: data.user.todo.id,
              todo: data.user.todo.todo,
            },
        };
        return successMessage;
    } catch (error) {
        const errorMessage = {
            message: "error",
            error: error.message,
        };
        throw new Error(errorMessage);
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
        const successMessage = {
            message: "success",
            todo: {
              id: data.user.todo.id,
              todo: data.user.todo.todo,
            },
        };
        return successMessage;
    } catch (error) {
        const errorMessage = {
            message: "error",
            error: error.message,
        };
        throw new Error(errorMessage);
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
        const successMessage = {
            message: "success",
            todo: {
              id: data.user.todo.id,
              todo: data.user.todo.todo,
            },
        };
        return successMessage;
    } catch (error) {
        const errorMessage = {
            message: "error",
            error: error.message,
        };
        throw new Error(errorMessage);
    }
};

export const LoginPage = async ( username, password, jwtToken ) => {
    try {
        const response = await fetch("http://localhost:5001/users/loginUser", {
            method:"POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        });
        if (response.status === 501) {
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
        const successMessage = {
            message: "User : " + data.user.username + " logged in",
            token: data.token,
            user: {
              id: data.user.id,
              username: data.user.username,
            },
        }
        res.status(201).json({ successMessage });
        return successMessage;
        
    } catch (error) {
        console.log('Login User error : ' + error.message)
    }
}