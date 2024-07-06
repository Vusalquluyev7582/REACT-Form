import React from 'react'
import { Link } from 'react-router-dom'

export default function Məlumatlar({ props }) {

    return (
        <div>
            <h1>Məlumatlar səhifəsinə xoş gəlmisiniz</h1>

            <h3>Ad Soyad : {props.ad}</h3>
            <h3>Şəhər : {props.şəhər}</h3>
            <h3>Doğum tarixi : {props.təvəllüd}</h3>
            <h3>Sevdiyi Rəng : {props.rəng}</h3>
            <h3>Address : {props.address}</h3>
            <Link to="/"><button>Geri dön</button></Link>
        </div>
    )

}