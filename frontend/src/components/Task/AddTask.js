import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { taskListState } from './../../States/TaskListState';

const TaskForm = () => {
    const [tasks, setTasks] = useRecoilState(taskListState);
    const [time, setTime] = useState('');
    const [comment, setComment] = useState('');
    const token = localStorage.getItem('access_token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            console.error("User not authenticated!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/task/add-task/', {
                time,
                comment,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                console.log("Task added successfully!");
                
                // Update the taskListState with the new task
                setTasks(prevTasks => [...prevTasks, response.data]);

                // Navigate to tasks list or stay on the same page with a success message

            }
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <div>
            <h1>Add Task</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Time (Duration in either minutes or hours):</label>
                    <input 
                        type="number" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>Comment:</label>
                    <textarea 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)} 
                    ></textarea>
                </div>
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;