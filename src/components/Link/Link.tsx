import React from 'react';
import './Link.css'
import {Link as Rlink} from 'react-router-dom'

interface LinkProps {
    text: string;
    active?: boolean;
    url: string;
}

export const Link: React.FC<LinkProps> = (props) => {

    let className = "Link";

    if (props.active) {
        className += " Link-active";
    }
    return <Rlink className={className} to={props.url}>{props.text}</Rlink>;

}