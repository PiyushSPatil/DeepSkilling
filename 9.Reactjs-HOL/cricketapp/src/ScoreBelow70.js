import React from "react";

function ScoreBelow70(props) {

    const players70 = [];

    props.players.map((item) => {

        if (item.score <= 70) {
            players70.push(item);
        }

        return null;
    });

    return (
        <div>
            {
                players70.map((item, index) => (
                    <li key={index}>
                        Mr. {item.name} {item.score}
                    </li>
                ))
            }
        </div>
    );
}

export default ScoreBelow70;