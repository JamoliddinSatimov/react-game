import propTypes, { number } from "prop-types"

export function Square({ value, clickBtn, id }) {
    return (
        <button className={`box-btn ${value} `} type="button" onClick={() => clickBtn(id)}>
            {value}
        </button>
    )
}

Square.propTypes = {
    value: propTypes.string,
    clickBtn: propTypes.func,
    id: number,
}
