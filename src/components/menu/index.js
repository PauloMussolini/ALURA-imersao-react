import React from 'react';
import Logo from '../../assets/img/mussaFlix.png';
import '../menu/menu.css';
import ButtonLink from '../buttonLink';

export default function (){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Mussa Flix Logo"/>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>

        </nav>
    );
}

