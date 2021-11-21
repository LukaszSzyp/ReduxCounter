import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../state/counter";

export const Content = () => {
  const value = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "150px",
        }}
      >
        <h3>{value}</h3>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button color="success" onClick={handleIncrement}>
            +
          </Button>
          <Button
            variant="outlined"
            style={{ border: "none" }}
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button color="error" onClick={handleDecrement}>
            -
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};
