import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const Content = () => {
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
        <h3>0</h3>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button color="success">+</Button>
          <Button variant="outlined" style={{ border: "none" }}>
            Reset
          </Button>
          <Button color="error">-</Button>
        </ButtonGroup>
      </div>
    </>
  );
};
