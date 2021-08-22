import React, { useState} from "react";
import styled from "styled-components"
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { CenterFocusStrong } from "@material-ui/icons";

function Header(props){
    const [input, setInput] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
    }

    return(
        <div class="Header">
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </LogoWrapper>
            <div id="HomeButtons"class="HomePageButton">
                <a href="/">Homepage</a>
            </div>
            <div id="HomeButtons"class="FollowingButton">
                <a href="/">Following</a>
            </div>
            <div class="Search">
                <div class="SearchBar">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => setInput(e.target.value)}/>
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                </div>
            </div>
            <div class= "Icons">
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <TextsmsIcon />
                </IconButton>
                <IconButton>
                    <FaceIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </div>
        
        </div>
    )
}

export default Header



const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }
`


