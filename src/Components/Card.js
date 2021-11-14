import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div className='card'>  {/*className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5 "*/}
            <img src={`https://robohash.org/${props.id}?200x200`}  alt='robot' /> {/* This site works by adding its URL then add any word to it then ? widthxheight */}
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
                {/* <h4>{props.id}</h4> */}
            </div>
        </div>
    );
}

export default Card;

//Destructuring
//Ex 1
// import React from 'react';

// const Card = (props) => {
//     const { name, id, email} = props;
//     return (
//         <div className='card'>  {/*className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5 "*/}
//             <img src={'https://robohash.org/${id}?200x200'}  alt='robot' /> {/* This site works by adding its URL then add any word to it then ? widthxheight */}
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//                 <h4>{id}</h4>
//             </div>
//         </div>
//     );
// }

// export default Card;


//Destructuring 
//Ex 2
// import React from 'react';

// const Card = ({name, email, id}) => {
//     return (
//         <div className='card'>  {/*className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5 "*/}
//             <img src={'https://robohash.org/${id}?200x200'}  alt='robot' /> {/* This site works by adding its URL then add any word to it then ? widthxheight */}
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//                 <h4>{id}</h4>
//             </div>
//         </div>
//     );
// }

// export default Card;



