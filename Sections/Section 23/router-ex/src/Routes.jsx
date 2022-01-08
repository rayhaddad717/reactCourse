import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Dog from './Dog'
import dogs from './Dogs'
function GetDog() {
    const params = useParams();
    const myDog = dogs.filter(dog => dog.name === params.dogName);
    console.log(params)
    const { name, age, imgSrc } = myDog[0];
    return (
        <Dog name={name} age={age} imgSrc={imgSrc} />
    )
}
export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<h1>HomePage</h1>} />
            <Route path='/dogs/:dogName' element={<GetDog />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}