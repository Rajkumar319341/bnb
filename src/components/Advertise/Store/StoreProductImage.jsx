import React, { useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './StoreProductImage.css';
import toast from 'react-hot-toast';

export default function StoreProductImage() {
    const storePhone = localStorage.getItem('storePhoneNumber');
    const productName = localStorage.getItem('productStorageName');
    const [images, setImages] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const handleImageChange = (e) => {
        let files = Array.from(e.target.files);
        let validFiles = [];

        files.forEach((file) => {
            const size = file.size;
            if (size > 20000000) {
                alert('Image size should be less than 2MB');
                return;
            }
            validFiles.push(file);
        });

        setImages((prevImages) => [...prevImages, ...validFiles]);
    };

    const handleFileUpload = async () => {
        if (!images.length) {
            alert("Please select images to upload.");
            return;
        }
    
        const formData = new FormData();
        // formData.append('storePhone', storePhone);
        // formData.append('productName', productName || '');
        images.forEach((image, index) => {
            formData.append('file', image);
        });
    
        try {
            const response = await fetch(`https://bnb.care4edu.com/bnb/image/store-product/multiple?storePhone=${storePhone}&productName=${productName}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': 'Basic ' + btoa('AllboutiqueNbeautique:9IOLDM5S7A8QSQW0E1R2T6Y4U8I3O'),
                },
            });
    
            if (response.ok) {
                // alert("Images uploaded successfully.");
                toast.success("Images uploaded successfully",{
                    position:'top-right'
                })
                setImages([]);
                setShowPopup(true); 
            } else {
                // alert("Failed to upload images. Please try again.");
                toast.error("Failed to upload images. Please try again.",{
                    position:'top-right'
                })
                console.error('Failed to upload images:', response.status, response.statusText);
            }
        } catch (error) {
            // alert("An error occurred while uploading images. Please try again.");
            toast.error("An error occurred while uploading images. Please try again.",{
                position:'top-right'
            })
            console.error('Error uploading images:', error);
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%' }}>
                    <br></br>
                    <h5 style={{ textAlign: 'center', color: 'black', margin: '20px' }}>PRODUCT IMAGES</h5>


            <form onSubmit={(e) => e.preventDefault()} style={{
                marginTop: '3vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '8px',
                boxShadow: '0px 10px 10px',
                padding: '20px',
                backgroundColor: 'white',
                border: '5px solid #ccc',
                maxWidth: '500px',
                margin: '0 auto',
                width: '90%',
            }}>
                <div style={{ marginTop: '10px' }}>
                    <label style={{ textAlign: 'center', fontFamily: 'monospace' }}>
                        Upload Images <UploadFileIcon fontSize='large' />
                    </label>
                    <input type='file'
                        name='file'
                        onChange={handleImageChange}
                        multiple
                        required
                        style={{
                            border: '2px solid ',
                            padding: '1.5rem',
                            borderStyle: 'dotted',
                            borderRadius: '10px',
                            width: '100%',
                        }}
                        placeholder='upload' />
                </div>

                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {images.map((file, index) => (
                        <div key={index} style={{ margin: '5px', position: 'relative' }}>
                            <img src={URL.createObjectURL(file)} alt={`Image ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
                        </div>
                    ))}
                </div>

                <button  onClick={handleFileUpload} style={{ width: "180px", height: "50px", marginTop: "20px", backgroundColor: "#e4c260", color: "black",borderRadius:"8px" }}
                 onMouseEnter={(e)=>e.target.style.backgroundColor="#ffd700"}
                 onMouseLeave={(e)=>e.target.style.backgroundColor="#e4c260"}
>
                    Upload Images
                </button>
            </form>

            
            {showPopup && (
                <div style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    zIndex: '9998'
                }}></div>
            )}

            {showPopup && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    height:'12rem',
                    width:'80%',
                    maxWidth: '300px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.1)',
                    zIndex: '9999'
                }}>
                    <h5>CLICK HERE TO ADD  MORE</h5>
                    <h5> PRODUCTS</h5>
                    <br></br>
                    <br></br>
                    <Link to='/StoreProduct'>
                    <button  style={{ width: "100px", height: "50px", marginTop: "0px", backgroundColor: "#e4c260", color: "black",borderRadius:"8px" }} 
                     onMouseEnter={(e)=>e.target.style.backgroundColor="#ffd700"}
                     onMouseLeave={(e)=>e.target.style.backgroundColor="#e4c260"}
                    >ADD  +</button>
                    </Link>
                  
                </div> 
            )}
        </div>
    );
}
