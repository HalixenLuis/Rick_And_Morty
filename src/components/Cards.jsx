import Card from './Card';

export default function Cards(props) {
   const { characters } = props;

   return (
      <div>
      {characters.map((character) => (
         <Card
          key={character.id}
          name={character.name}
          image={character.image}
          status={character.status}
          species={character.species}
          onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      ))}
      </div>
  );
}





