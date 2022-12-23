import React from 'react'
import "./Home.css"
import CardsHome from '../../CardsHome/CardsHome'
import BannerHome from '../../BannerHome/BannerHome'
import VideoHome from '../../VideoHome/VideoHome'
import TresBotonesHome from '../../TresBotonesHome/TresBotonesHome'
import imagenfindink from "../../../assets/imagenfindink.jpeg"
import { Link } from 'react-router-dom'
import { getTatuadores } from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect, useState } from 'react'



const Home = props => {

    const dispatch = useDispatch()
    const allEvents = useSelector((state) => state.all_events)


    useEffect(() => {
        dispatch(getTatuadores())
    }, [dispatch])

    const { route } = props
    return (
        <>
           <BannerHome/>
           <CardsHome/>
           <VideoHome/>
           <TresBotonesHome/>
        </>
    )
}

export default Home