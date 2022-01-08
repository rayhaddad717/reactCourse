// class Hello extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello world</h1>
//                 <h1>Hello world</h1>
//                 <h1>Hello world</h1>
//             </div>
//         );

//     }
// };

function Hello() {
    return <h1>function component</h1>
}
//will add this component to the div with id root in html
ReactDOM.render(<Hello />, document.querySelector('#root'))