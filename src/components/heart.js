export default function Heart({ isLiked, setLiked }) {
  return (
    <button
      onClick={() => setLiked(!isLiked)}
      className={"material-icons heart " + (isLiked && "red")}
      type="button"
    >
      {isLiked ? "favorite" : "favorite_border"}
    </button>
  );
}
