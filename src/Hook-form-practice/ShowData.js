import React from 'react';

const ShowData = (props) => {
    return (
        <ul className='row pb-2 mt-5'>
            {
                props.skills.map(skill => {
                    return <li key={skill.id}>{skill.title}</li>
                })
            }
        </ul>
    );
};

export default ShowData;