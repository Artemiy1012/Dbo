import React from 'react';
import {Paragraph} from './Paragraph';

export function Header() {
    const [text, setText] = React.useState('Система выписок ДБО');

    setInterval(() => {
        setText(new Date().toISOString());
    }, 1000);

    return (
        <header className="App-header">
            <Paragraph text={text}/>

        </header>
    );
}
