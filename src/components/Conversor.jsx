import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const product_group = [
  {
    name: "Head Up Display",
    value: "HUD",
  },
  {
    name: "Full Digital Cluster",
    value: "FDC",
  },
  {
    name: "Driver Camara System",
    value: "DCS",
  },
  {
    name: "Display Solution",
    value: "DS",
  },
  {
    name: "Dissociated Center Stack Display",
    value: "DCD",
  },
  {
    name: "Modul Display",
    value: "MD",
  },
];

const type_of_line = [
  {
    name: "Multi Display",
    value: "M",
  },
  {
    name: "Single Display",
    value: "S",
  },
  {
    name: "Pillar to Pillar Display",
    value: "P",
  },
];

const standardization_level = [
  {
    name: "Non-standard",
    value: 0,
  },
  {
    name: "Standard",
    value: 1,
  },
];

const technology = [
  {
    name: "Display Closing Line",
    value: "T01",
  },
  {
    name: "Display Backlight Assembly Line",
    value: "T02",
  },
  {
    name: "Matrix Backlight Assembly",
    value: "T03",
  },
  {
    name: "Hybrid Bonding Line",
    value: "T04",
  },
  {
    name: "Display Wet Bonding Line",
    value: "T05",
  },
  {
    name: "Display Dry Bonding Line",
    value: "T06",
  },
  {
    name: "Display Testing Line",
    value: "T07",
  },
  {
    name: "Electronic Final Assembly",
    value: "T08",
  },
];

const version_line = [
  {
    name: "Full Version",
    value: "FV",
  },
  {
    name: "Basic Version",
    value: "BV",
  },
  {
    name: "Special Version",
    value: "SP",
  },
];

const number_of_workplaces = [
  {
    name: "WorkPlaces 01",
    value: "W01",
  },
  {
    name: "WorkPlaces 02",
    value: "W02",
  },
  {
    name: "WorkPlaces 03",
    value: "W03",
  },
  {
    name: "WorkPlaces 04",
    value: "W04",
  },
  {
    name: "WorkPlaces 05",
    value: "W05",
  },
  {
    name: "WorkPlaces 06",
    value: "W06",
  },
];

const automation_level = [
  {
    name: "00 to 29%",
    value: "A1",
  },
  {
    name: "30 to 59%",
    value: "A2",
  },
  {
    name: "60 to 89%",
    value: "A3",
  },
  {
    name: "90 to 99%",
    value: "A4",
  },
  {
    name: "100%",
    value: "A5",
  },
];

const version_list = [
  {
    name: "Initial Version",
    value: "AA",
  },
  {
    name: "Change in the configuration of the line",
    value: "AB",
  },
  {
    name: "Consecutive of changes",
    value: "AC",
  },
  {
    name: "Consecutive of changes",
    value: "AD",
  },
];

export function Conversor() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [productGroup, setProductGroup] = useState("");
  const [typeOfLine, setTypeOfLine] = useState("");
  const [tech, setTech] = useState("");
  const [versionLine, setVersionLine] = useState("");
  const [number, setNumber] = useState("");
  const [automation, setAutomation] = useState("");
  const [version, setVersion] = useState("");

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setProductGroup(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setTypeOfLine(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setTech(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;
    setVersionLine(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange5 = (event) => {
    const {
      target: { value },
    } = event;
    setNumber(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange6 = (event) => {
    const {
      target: { value },
    } = event;
    setAutomation(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange7 = (event) => {
    const {
      target: { value },
    } = event;
    setVersion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <TableContainer component={Paper} style={{ display: "flex" }}>
      <Table
        sx={{ minWidth: 700, margin: 0 }}
        aria-label="customized table"
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={12}>
              Stellantis FDC FA
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={12}>
            {productGroup}-{typeOfLine}-{tech}-{versionLine}-{number}-
              {automation}-{version}
            </TableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell align="center">
              Product Group
              <p style={{ display: "flex", justifyContent: "center" }}>(1)</p>
            </StyledTableCell>
            <StyledTableCell align="center">
              Type of Line
              <p style={{ display: "flex", justifyContent: "center" }}>(2)</p>
            </StyledTableCell>
            <StyledTableCell align="center">
              Technology
              <p style={{ display: "flex", justifyContent: "center" }}>(3)</p>
            </StyledTableCell>
            <StyledTableCell align="center">
              Version Line
              <p style={{ display: "flex", justifyContent: "center" }}>(4)</p>
            </StyledTableCell>
            <StyledTableCell align="center">
              Number of Workplaces
              <p style={{ display: "flex", justifyContent: "center" }}>(5)</p>
            </StyledTableCell>
            <StyledTableCell align="center">
              Automation Level
              <p style={{ display: "flex", justifyContent: "center" }}>(6)</p>
            </StyledTableCell>
            <StyledTableCell align="center">
              Version
              <p style={{ display: "flex", justifyContent: "center" }}>(7)</p>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="center">
              <div>
                <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                  <Select
                    displayEmpty
                    value={productGroup}
                    onChange={handleChange1}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Select</em>
                    </MenuItem>
                    {product_group.map((product) => (
                      <MenuItem
                        value={product.value}
                        style={getStyles(product.name, productGroup, theme)}
                      >
                        {product.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center">
              <div>
                <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                  <Select
                    displayEmpty
                    value={typeOfLine}
                    onChange={handleChange2}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Select</em>
                    </MenuItem>
                    {type_of_line.map((product) => (
                      <MenuItem
                        value={product.value}
                        style={getStyles(product.name, typeOfLine, theme)}
                      >
                        {product.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center">
              <div>
                <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                  <Select
                    displayEmpty
                    value={tech}
                    onChange={handleChange3}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Select</em>
                    </MenuItem>
                    {technology.map((product) => (
                      <MenuItem
                        value={product.value}
                        style={getStyles(product.name, tech, theme)}
                      >
                        {product.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center">
              <div>
                <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                  <Select
                    displayEmpty
                    value={versionLine}
                    onChange={handleChange4}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Select</em>
                    </MenuItem>
                    {version_line.map((product) => (
                      <MenuItem
                        value={product.value}
                        style={getStyles(product.name, versionLine, theme)}
                      >
                        {product.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center">
              <div>
                <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                  <Select
                    displayEmpty
                    value={number}
                    onChange={handleChange5}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Select</em>
                    </MenuItem>
                    {number_of_workplaces.map((product) => (
                      <MenuItem
                        value={product.value}
                        style={getStyles(product.name, number, theme)}
                      >
                        {product.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center">
              <div>
                <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                  <Select
                    displayEmpty
                    value={automation}
                    onChange={handleChange6}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Select</em>
                    </MenuItem>
                    {automation_level.map((product) => (
                      <MenuItem
                        value={product.value}
                        style={getStyles(product.name, automation, theme)}
                      >
                        {product.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center">
              <div>
                <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                  <Select
                    displayEmpty
                    value={version}
                    onChange={handleChange7}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Select</em>
                    </MenuItem>
                    {version_list.map((product) => (
                      <MenuItem
                        value={product.value}
                        style={getStyles(product.name, version, theme)}
                      >
                        {product.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableRow>
          <TableCell align="center" colSpan={12}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {productGroup}-{typeOfLine}-{tech}-{versionLine}-{number}-
              {automation}-{version}
            </p>
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
}
