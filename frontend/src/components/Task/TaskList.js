import React, { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { taskListState } from '../../States/TaskListState'; 



const TaskList = () => {
    const [tasks, setTasks] = useRecoilState(taskListState);
    const token = localStorage.getItem('access_token');  // Getting the saved token from localStorage

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/task/tasks/', {
                    headers: {
                        'Authorization': `Bearer ${token}`  // Setting the JWT token in headers for authentication
                    }
                });
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);

                // If error due to authentication, consider redirecting the user to login
                // Example: if(error.response.status === 401) { redirectToLogin(); }
            }
        };

        fetchTasks();
    }, [token, setTasks]); 

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h2>{task.time}</h2>
                        <p>{task.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
