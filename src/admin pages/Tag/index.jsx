import { Container } from "./styles";
import add from "../../assets/add.svg";
import close from "../../assets/close.svg";

export function Tag({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <div className="tag-container">
        <div className="tag">
          {isNew ? (
            <input
              type="text"
              value={value}
              readOnly={!isNew}
              {...rest}
            />
          ): (
            <input
            type="text"
            value={value}
            {...rest}
          />
          )}
        </div>

        <button type="button" onClick={onClick}>
          {isNew ? <img src={add} alt="Add" /> : <img src={close} alt="Subtract" />}
        </button>
      </div>
    </Container>
  );
}
