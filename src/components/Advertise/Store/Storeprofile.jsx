import * as React from 'react';
import { useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {  useNavigate } from 'react-router-dom';
import './File_Upload.css';
import { toast } from 'react-hot-toast';

export const Storeprofile = () => {
    const storePhone = localStorage.getItem('storePhoneNumber')
    console.log("Phone no:", storePhone)
    const [images, setImages] = useState([]);
    const [adverId, setAdverId] = useState('');
    const [idGenerated, setIdGenerated] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const navigate=useNavigate();

    const handleImageChange = (e) => {
        let files = Array.from(e.target.files);
        let validFiles = [];
    
        if (images.length + files.length > 1) {
            alert('You are allowed to upload only one profile image.');
            return;
        }
    
        files.forEach((file) => {
            const size = file.size;
            if (size > 20000000) {
                alert('Image size should be less than 2MB');
                return;
            }
            validFiles.push(file);
        });
    
        console.log("Valid files:", validFiles);
        setImages((prevImages) => [...prevImages, ...validFiles]);
    };
    

    const handleFileUpload = async () => {
        if (images.length > 0) {
            const form= new FormData();
            // console.log("Type of form:",form.type)
            // console.log("Phone number to store:",storePhone)
            // form.append('phone',storePhone);
            // console.log("Form after append phone no:",form)
            
            // images.forEach((img, index) => {
            //     form.append('files',img); 
            //     console.log("Image Path:", img);
            // });
            images.forEach((img, index) => {
                form.append('file', img); 
                console.log("Image Path:", img);
            });
            
    
            console.log("Form Data before fetch:", form);
            try {
                const response = await fetch(
                    `https://bnb.care4edu.com/bnb/store/profile-image?phone=${storePhone}`,
                    {
                        method: 'POST',
                        body: form,
                        headers: {
                            'Authorization': 'Basic ' + btoa('AllboutiqueNbeautique:9IOLDM5S7A8QSQW0E1R2T6Y4U8I3O'),
                        },
                    }
                );
    
                console.log(response.status);
                const responseBody = await response.json(); 
                console.log("Response body:",responseBody);
                console.log("Response body:", responseBody.status); 
    
                if (response.ok) {
                    // alert("Images added Successfully");
                    toast.success("Profile uploaded Successfully", {
                        position: 'top-right',
                    });
                    navigate('/FileUpload');
                    
                }else{
                    toast.error(`Failed to upload profile images. Status: ${response.status}`)
                    // throw new Error(`Failed to upload profile images. Status: ${response.status}`);
                   
                }
    
               
                setOpenModal(true);
                setAdverId('');
                setIdGenerated(false);
            } catch (error) {
                console.error('Error uploading images:', error);
                // alert(`Error uploading images: ${error.message}`);
                toast.error(`Error uploading images: ${error.message}`,{
                    position:'top-right'
                })
            } finally {
               
                setImages([]);
            }
        } else {
            console.warn('Please select images before uploading.');
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

    };


  return (
    <>
    <br></br>
    <h5 style={{ textAlign: 'center', color: 'black', margin: '20px' }}>STORE PROFILE</h5>

    <form className='fileupload_form' onSubmit={handleSubmit} style={{
        marginTop: '4vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8px',
        boxShadow: '0px 10px 10px',
        padding: '20px',
        backgroundColor: 'white',
        border: '5px solid #ccc',
        // width: '500px',
        margin: '0 auto',
    }}>
        <div style={{ marginTop: '10px' }}>
            <label style={{ textAlign: 'center', fontFamily: 'monospace' }}>
                Upload Profile Image<UploadFileIcon fontSize='large' />
            </label>
            <input type='file'
            className='file_input'
                name='file'
                onChange={handleImageChange}
                multiple
                required
                style={{
                    border: '2px solid ',
                    padding: '1.5rem',
                    borderStyle: 'dotted',
                    borderRadius: '10px'
                }}
                placeholder='upload' />
        </div>

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {images.map((file, index) => (
                <div key={index} style={{ margin: '5px', position: 'relative' }}>
                    <img src={URL.createObjectURL(file)} alt={`Image ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
                </div>
            ))}
        </div>
        

        <button  onClick={handleFileUpload}  style={{ width: "180px", height: "50px", marginTop: "20px", backgroundColor: "#e4c260", color: "black",borderRadius:"8px" }}
          onMouseEnter={(e)=>e.target.style.backgroundColor="#ffd700"}
          onMouseLeave={(e)=>e.target.style.backgroundColor="#e4c260"}>
            Upload Profile
        </button>
    </form>
    </>
  )
}
