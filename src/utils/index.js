import { writeCookie } from  "../common"

export const registerUser = async (username, password) => 
{
    try 
    {
        const response = await fetch
        ("http://localhost:5001/users/register", 
            {method: "POST"
            ,mode: "cors"
            ,headers:{"Content-Type" : "application/json"}
            ,body: JSON.stringify(
                {"username": username
                ,"password": password
                })
            }
        )
        const data = await response.json()
        console.log(data)
        return data
    } 
    catch (error) 
    {
        console.log('Register User error : ' + error.message)
    }
}


export const loginUser = async ( username, password ) => 
{
    console.log('loginUser - username: ' + username + ' passowrd: ' + password)
    try 
    {
        const response = await fetch
        ("http://localhost:5001/users/login", 
            {method: "POST"
            ,mode: "cors"
            ,headers: {"Content-Type": "application/json"}
            ,body: JSON.stringify(
                {"username": username
                ,"password": password
                })
            }
        )
        const data = await response.json()
        data.message = "User: " + data.user.username + " logged in"
        console.log(data)

        writeCookie("jwt_token", data.user.token, 7)

        return data
        
    } catch (error) {
        console.log('Login User error : ' + error.message)
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