import React from 'react';
import './AddTour.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://dark-dracula-64114.herokuapp.com/tourorders', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
            console.log(res)
        })
    } 

    return (
        <div className="add-tour">
            <h2>Add a new tour</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("spotName")} placeholder="spot name" />
                <input {...register("location")} placeholder="location" />
                <input {...register("img")} placeholder="img url" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("trips_cost")} placeholder="price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddTour;