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
import { Conversor2 } from "./Conversor2";
import Button from "@mui/material/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

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

function CopyButton({ text1, text2, text3, text4, text5, text6, text7, text8 }) {
  const [copied, setCopied] = useState(false);
  const nomenclature = `${text1}-${text2}
  ${text3}-${text4}-${text5}-${text6}-${text7}-
  ${text8}`

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <CopyToClipboard text={nomenclature} onCopy={handleCopy}>
      <Button variant="contained" color="inherit">
        {copied ? "Copied!" : nomenclature}
      </Button>
    </CopyToClipboard>
  );
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

const type_of_line_2 = [
  {
    name: "HUD 1.8\" / 2.6\"",
    value: "A",
  },
  {
    name: "HUD 3.1\"",
    value: "B",
  },
  {
    name: "HUD 4.1",
    value: "C",
  },
];

const standardization_level = [
  {
    name: "Non-standard",
    value: "0",
  },
  {
    name: "Standard",
    value: "1",
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
  {
    name: "Display Final Assembly",
    value: "T09",
  },
];

const technology_2 = [
  {
    name: "TFT PGU",
    value: "T10",
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
  { name: "WorkPlaces 07", value: "W07" },
  { name: "WorkPlaces 08", value: "W08" },
  { name: "WorkPlaces 09", value: "W09" },
  { name: "WorkPlaces 10", value: "W10" },
  { name: "WorkPlaces 11", value: "W11" },
  { name: "WorkPlaces 12", value: "W12" },
  { name: "WorkPlaces 13", value: "W13" },
  { name: "WorkPlaces 14", value: "W14" },
  { name: "WorkPlaces 15", value: "W15" },
  { name: "WorkPlaces 16", value: "W16" },
  { name: "WorkPlaces 17", value: "W17" },
  { name: "WorkPlaces 18", value: "W18" },
  { name: "WorkPlaces 19", value: "W19" },
  { name: "WorkPlaces 20", value: "W20" },
  { name: "WorkPlaces 21", value: "W21" },
  { name: "WorkPlaces 22", value: "W22" },
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
    name: "Change in the configuration of the line 01",
    value: "AB",
  },
  {
    name: "Change in the configuration of the line 02",
    value: "AC",
  },
  {
    name: "Change in the configuration of the line 03",
    value: "AD",
  },
  {
    name: "Change in the configuration of the line 04",
    value: "AE",
  },
];

export function Conversor() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [productGroup, setProductGroup] = useState("");
  const [typeOfLine, setTypeOfLine] = useState("");
  const [standardLevel, setStandardLevel] = useState("");
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

  const handleChange8 = (event) => {
    const {
      target: { value },
    } = event;
    setStandardLevel(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <TableContainer component={Paper} style={{ display: "flex" }}>
        <Table
          sx={{ minWidth: 700, margin: 0 }}
          aria-label="customized table"
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={12}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Standard Line Configurator
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell
                title="Type of product of the line according to specific production processes in the BA of UX"
                align="center"
              >
                Product Group
                <p style={{ display: "flex", justifyContent: "center" }}>(1)</p>
              </StyledTableCell>
              <StyledTableCell
                title="Line type specified in the eSEQ platform describing the line"
                align="center"
              >
                Type of Line
                <p style={{ display: "flex", justifyContent: "center" }}>(2)</p>
              </StyledTableCell>
              <StyledTableCell
                title="It is used to determine if the line is Standard or not"
                align="center"
              >
                Standardization Level
                <p style={{ display: "flex", justifyContent: "center" }}>(3)</p>
              </StyledTableCell>
              <StyledTableCell
                title="Main technology to which the line is dedicated"
                align="center"
              >
                Technology
                <p style={{ display: "flex", justifyContent: "center" }}>(4)</p>
              </StyledTableCell>
              <StyledTableCell
                title="It is used to determine the line version according to the standard layout of the stations"
                align="center"
              >
                Version Line
                <p style={{ display: "flex", justifyContent: "center" }}>(5)</p>
              </StyledTableCell>
              <StyledTableCell
                title="Number of WP that are on the line"
                align="center"
              >
                Number of Workplaces
                <p style={{ display: "flex", justifyContent: "center" }}>(6)</p>
              </StyledTableCell>
              <StyledTableCell
                title="Level of automation in the line. This is defined in the VIWs"
                align="center"
              >
                Automation Level
                <p style={{ display: "flex", justifyContent: "center" }}>(7)</p>
              </StyledTableCell>
              <StyledTableCell
                title="Consecutive of the line to register changes to the initial version. A change could be the implementation of a new workstation after one year"
                align="center"
              >
                Version
                <p style={{ display: "flex", justifyContent: "center" }}>(8)</p>
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
                      {productGroup == "HUD" && type_of_line_2.map((product) => (
                        <MenuItem
                          value={product.value}
                          style={getStyles(product.name, typeOfLine, theme)}
                        >
                          {product.name}
                        </MenuItem>
                      ))}
                      {productGroup != "HUD" && type_of_line.map((product) => (
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
                      value={standardLevel}
                      onChange={handleChange8}
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
                      {standardization_level.map((product) => (
                        <MenuItem
                          value={product.value}
                          style={getStyles(product.name, standardLevel, theme)}
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
                      {productGroup == "HUD" && technology_2.map((product) => (
                        <MenuItem
                          value={product.value}
                          style={getStyles(product.name, tech, theme)}
                        >
                          {product.name}
                        </MenuItem>
                      ))}
                      {productGroup != "HUD" && technology.map((product) => (
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
              <div style={{margin: "15px"}}>

              <CopyButton
                text1={ productGroup }
                text2={ typeOfLine }
                text3={ standardLevel }
                text4={ tech }
                text5={ versionLine }
                text6={ number }
                text7={ automation }
                text8={ version }
              />
              </div>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>

      <br />
      <br />
      <br />
      <Conversor2 />
    </div>
  );
}
