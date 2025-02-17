import Track from "./Track";
import styles from "./Tracklist.module.css";

function Tracklist({ list, onAdd, onRemove, isRemoval }) {
  return (
    <div>
      <ul className={styles.tracklist}>
        {list.map((track) => {
          return (
            <Track
              key={track.id}
              track={track}
              onAdd={onAdd}
              onRemove={onRemove}
              isRemoval={isRemoval}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Tracklist;
