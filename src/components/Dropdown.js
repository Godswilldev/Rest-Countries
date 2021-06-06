import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
      backgroundColor: "#2b3945",
      boxShadow: "0.3rem 0.3rem 0.3rem rgba(0,0,0,.3)",
      borderRadius: 6,
      color: "#fff",
      fontSize: 20,
      padding: "3px 46px 3px 46px",
      fontWeight: 600,
    },
  },
  input: {
    borderRadius: 6,
    position: "relative",
    backgroundColor: "#2b3945",
    fontSize: 20,
    padding: "5px 50px 5px 50px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: ["Nunito Sans"],
    "&:focus": {
      borderRadius: 4,
      boxShadow: "0.3 0.3 0.3 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  const [region, setRegion] = React.useState("");
  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">
          Filter by Region
        </InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={region}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="africa">Africa</MenuItem>
          <MenuItem value="america">America</MenuItem>
          <MenuItem value="asia">Asia</MenuItem>
          <MenuItem value="europe">Europe</MenuItem>
          <MenuItem value="oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
