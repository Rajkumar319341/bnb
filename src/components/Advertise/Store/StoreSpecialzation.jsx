import { TextField } from '@mui/material';
import React from 'react'
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Store_Specialization.css';


const StoreSpecialization = () => {

    

    const strorePhone = localStorage.getItem('storePhoneNumber')
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        id: 0,
        phone: strorePhone,
        specializationName: '',
        specializationDescription: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('specializationName', formData.specializationName); 
        const username = 'bnb_api';
        const password = 'QSJNVBSNSBJHSTUHJSISIJSSEV';
        const basicAuth = 'Basic ' + btoa(username + ':' + password);
        fetch('https://bnb.care4edu.com/bnb/stores/specialization', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': basicAuth
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('specializationDescription', formData.specializationDescription);
                console.log('Success:', data);
                navigate('/store-profile');
            })
            .catch((error) => {
                // Handle errors
                console.error('Error:', error);
            });
    };
    
    return (
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>

<h5 style={{ textAlign: 'center', color: 'black', margin: '20px' }}>STORE SPECIALIZATION</h5>
            <form className='specialization_form'
            onSubmit={handleSubmit}
            style={{ marginTop: '2vh', // Adjust top margin for vertical centering
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: '8px',
                        boxShadow: '0px 10px 10px',
                        padding: '20px', // Adjust padding for spacing
                        backgroundColor: 'white',
                        border: '5px solid #ccc',
                        // width: '400px',
                        margin: '0 auto', 
                       }} >

                <TextField id="specializationName"
                    fullWidth
                    label="Specialization Name"
                    // helperText="Tailors"
                    required value={formData.specializationName}
                    onChange={handleInputChange} 
                   />
                    <br></br>
                <TextField id="specializationDescription"
                    fullWidth
                    label="Specialization Description"
                    // helperText="Special design"
                    required
                    value={formData.specializationDescription}
                    onChange={handleInputChange} />
                <button type="submit"  style={{ width: "100px", height: "50px", marginTop: "20px", backgroundColor: "#e4c260", color: "black",borderRadius:"8px" }}
                onMouseEnter={(e)=>e.target.style.backgroundColor="#ffd700"}
                onMouseLeave={(e)=>e.target.style.backgroundColor="#e4c260"}
                >Submit</button>
            </form>

        </div>
    )
}

export default StoreSpecialization