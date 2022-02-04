import { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Effet pour l'ajout et la mise a jours
        console.log('Effect start !');
        document.title = `Counter : ${count}`;

        // Effet de nettoyage
        return () => {
            console.log('Effect Clear :o');
        }
    })

    const handleUpCounter = () => {
        // Mise à jour du state => Demande a react d'actualiser le composant
        setCount(c => c + 1);
    }

    return (<>
        {console.log('Render')}
        <p>Valeur du compteur : {count}</p>
        <button onClick={handleUpCounter}>+1</button>
    </>)
}

export default Counter;