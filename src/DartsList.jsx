import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const DartsList = () => {
    const [Dartses, setDartses] = useState([]);
    const [isPending, setPending] =useState(false);

    useEffect(() => { // fetch-api átírása axios-ra!
        setPending(true);
        axios.get('https://Darts.sulla.hu/Darts')
        .then(valasz => setDartses(valasz.data))
        .catch(hiba => console.log(hiba))
        .finally(() => setPending(false));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Sakkozók</h2>
        {isPending ? (<div className="spinner-border"></div>) : (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                {Dartses.map((Darts, index) => (
                    <div className="col" key={index}>
                    <div className="card h-100">
                    <p className="text-dark text-center">Sakkozó neve: {Darts.name}</p>
                    <p className="text-dark text-center">Születési éve: {Darts.birth_date}</p>
                    <p className="text-dark text-center">Megnyert világbajnokságai: {Darts.world_ch_won}</p>
                    <div className="card-body d-flex flex-column align-items-center">
                        <Link to={Darts.profile_url} className="fs-5" target="_blank">Profil link</Link><br />
                        <Link key={Darts.id} to={"/Darts/" + Darts.id}><img src={Darts.image_url ? Darts.image_url : 
                            "https://via.placeholder.com/400x800"} alt={Darts.name} 
                            className="img-fluid" style={{width: "200px"}}/></Link>
                       </div>
                       <div className="text-center">
                       <Link to={"/Darts/" + Darts.id}><i className="bi bi-text-paragraph fs-3"></i></Link>&nbsp;&nbsp;&nbsp;
                        <Link to={"/mod-Darts/" + Darts.id}><i className="bi bi-pencil-square fs-3"></i></Link>&nbsp;&nbsp;&nbsp;
                        <Link to={"/del-Darts/"+ Darts.id}><i className="bi bi-trash3 fs-3"></i></Link>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        )}
        </div>
    );
};