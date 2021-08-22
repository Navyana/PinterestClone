import React from 'react'
import Pin from './Pin';
import styled from "styled-components";

function MainBoard(props) {

    let { pins } = props;

    return (
        <div class="Main">
            <div class="container">
                {pins.map((pin, index) =>{
                    let {urls} = pin;
                    return <Pin key = {index} urls = {urls}/>
                })}
            </div>
        </div>
    )
}

export default MainBoard
