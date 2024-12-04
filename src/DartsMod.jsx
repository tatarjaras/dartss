import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

export const DartsMod = () => {
    const params = useParams();
    const id = params.DartsId;
    const navigate = useNavigate();
    const [Darts, setDarts] = useState({
        name: '',
        birth_date: '',
        world_ch_won: 0,
        profile_url: '',
        image_url: ''
    });
    useEffect(() => {
        const fetchDarts = async() => {
            try {
                const response = await 
                axios.get(`https://Darts.sulla.hu/Darts/${id}`);
                setDarts(response.data);
            }
            catch(error) {
                    console.log("Hiba a fetch-elésben: ", error);
            }
        };
        fetchDarts();
     }, [id]);

    const handleInputChange= event =>{
        const {name, value} = event.target;
        setDarts(prevState =>({
            ...prevState,
            [name] : value
        }));
    }
    const handleSubmit = event =>{
     event.preventDefault();
     axios.put(`https://Darts.sulla.hu/Darts/${id}`, Darts)
     .then(() => {
        navigate("/");
     })
     .catch(error => {
        console.log("Hiba a sakk adatok frissítésében: ", error);
     });
    };
    return (
    <div className="p-5 content bg-whitesmoke text-center">
    <form onSubmit={handleSubmit}>
        <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Sakkozó neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" 
                        defaultValue={Darts.name} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Születési éve:</label>
                    <div className="col-sm-9">
                        <input type="date" name="birth_date" className="form-control"
                        defaultValue={Darts.birth_date} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Nyert világbajnokságai:</label>
                    <div className="col-sm-9">
                        <input type="number" name="world_ch_won" className="form-control"
                        value={Darts.world_ch_won.toString()} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Profil URL-je:</label>
                    <div className="col-sm-9">
                        <input type="text" name="profile_url" className="form-control"
                        defaultValue={Darts.profile_url} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Kép URL-je:</label>
                    <div className="col-sm-9">
                        <input type="text" name="image_url" className="form-control"
                        defaultValue={Darts.image_url} onChange={handleInputChange}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Küldés</button>
            </form>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <Link to="/"><i className="bi bi-backspace-fill fs-6">Vissza</i></Link>&nbsp;&nbsp;&nbsp;
        </div>
        </div>
       
    );
};