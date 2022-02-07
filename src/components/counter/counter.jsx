import { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Effet pour l'ajout et la mise a jours
        console.log('Effect: Counter !');

        // Action sur le DOM
        document.title = `Counter : ${count}`;

        // Effet de nettoyage
        return () => {
            console.log('Effect: Clear Counter !:o');

            // Action sur le DOM
            document.title = `Counter remove :(`;
        }
    })

    const handleUpCounter = () => {
        console.log('Bouton: Counter ++');

        // Mise à jour du state => Demande a react d'actualiser le composant
        setCount(c => c + 1);
    }

    return (<>
        {console.log('Render: Counter')}
        <p>Valeur du compteur : {count}</p>
        <button onClick={handleUpCounter}>+1</button>
    </>)
}

export default Counter;