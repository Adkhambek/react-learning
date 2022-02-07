import React from "react";

const Header = (props) => (
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">The</span>
            </span>
            day
        </h1>
        <h3 className="tagline">
            <span>{props.tagLine}</span>
        </h3>
    </header>
);

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>
//                     Catch
//                     <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the">The</span>
//                     </span>
//                     day
//                 </h1>
//                 <h3 className="tagline">
//                     <span>{this.props.tagLine}</span>
//                 </h3>
//             </header>
//         );
//     }
// }

export default Header;
