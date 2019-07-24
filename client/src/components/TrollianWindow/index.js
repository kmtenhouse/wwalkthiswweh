import React from 'react';

function TrollianWindow(props) {
    return (
        <div className="trollian-window">
            {props.children}
        </div>
    );
}

export default TrollianWindow;