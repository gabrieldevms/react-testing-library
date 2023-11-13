import './favorite-input.css';

type FavoriteInputProps = { 
  onUpdateFavoritePokemon: (a: boolean) => void,
  isFavorite: boolean
}

function FavoriteInput(props: FavoriteInputProps) {
  const { onUpdateFavoritePokemon, isFavorite } = props;

  return (
    <form className="favorite-form">
      <label htmlFor="favorite">
        <input
          type="checkbox"
          id="favorite"
          checked={ isFavorite }
          onChange={
            ({ target: { checked } }) => onUpdateFavoritePokemon(checked)
          }
        />
        { `Pokémon favoritado?` }
      </label>
    </form>
  );
}

export default FavoriteInput;
