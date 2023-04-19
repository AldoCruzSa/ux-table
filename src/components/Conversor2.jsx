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

function CopyButton({ text1, text2, text3, text4, text5, text6, text7, text8 }) {
  const [copied, setCopied] = useState(false);
  const nomenclature = `${text1}-${text2}/${text3}.
  ${text4}/${text5}-${text6}
  ${text7}-${text8}`

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

const process_name = [
  { name: "Screwing", value: "100" },
  { name: "Gluing & Dispensing", value: "200" },
  { name: "Riveting & welding", value: "300" },
  { name: "Cleaning", value: "400" },
  { name: "Miscellaneos or uncategorized", value: "500" },
  { name: "Components inspection", value: "600" },
  { name: "Testing", value: "700" },
];

const list_1 = [
  {
    name: "Automatic screwing - Generic screwing module Pick and place, 6 axis robot",
    value: "101",
  },
  {
    name: "Automatic screwing - Generic screwing module side feeding, 6 axis robot",
    value: "102",
  },
  { name: "Automatic screwing - Deprag module, 6 axis robot", value: "103" },
  {
    name: "Automatic screwing - Generic screwing module Pick and place, 3 axis",
    value: "104",
  },
  {
    name: "Automatic screwing - Generic screwing module side feeding, 3 axis",
    value: "105",
  },
  { name: "Manual screwing - Manual screw insertion", value: "106" },
  { name: "Manual screwing - Automatic feeding", value: "107" },
];
const list_2 = [
  { name: "Hot melt gluing - single mixing", value: "201" },
  { name: "Hot melt gluing - Mixing system", value: "202" },
  {
    name: "Thermal paste - gap filler Schegenplufg, cartdrige dosing",
    value: "203",
  },
  {
    name: "Thermal paste - gap filler Schegenplufg, bucket dosing",
    value: "204",
  },
  { name: "Thermal paste - gap filler RAMPF", value: "205" },
];

const list_3 = [
  {
    name: "Automatic pre-assembly / assembly, snaps or adhesive.",
    value: "301",
  },
  { name: "Riveting of plastics - cold riveting", value: "302" },
  { name: "Riveting of plastics - hot riveting", value: "303" },
  { name: "Adhesive tape - roller application", value: "304" },
  { name: "Adhesive tape - Endless tape", value: "305" },
  { name: "Laser welding", value: "306" },
];

const list_4 = [
  { name: "Typhoon cleaning - Rotating nozzles", value: "401" },
  { name: "Typhoon cleaning - Sluice cleaning machine", value: "402" },
  { name: "Typhoon cleaning - Sub assy cleaning module", value: "403" },
  { name: "Typhoon cleaning - TC010 ESD", value: "404" },
  { name: "Typhoon cleaning - TC012 ESD", value: "405" },
  { name: "Typhoon cleaning - TC 04", value: "406" },
  { name: "Typhoon cleaning - TC 06", value: "407" },
  { name: "Typhoon cleaning - TC 014", value: "408" },
  { name: "Typhoon cleaning - TC 015", value: "409" },
  { name: "Typhoon cleaning - TC 016", value: "410" },
  { name: "Clean room light", value: "411" },
  { name: "Roller cleaning (Teknek)", value: "412" },
];

const list_5 = [
  { name: "Manual components assembly (snaps, thermal pad)", value: "501" },
  { name: "Automatic components assembly/disassembly", value: "502" },
  { name: "Automatic components position inspection", value: "503" },
  { name: "Manual cable connection (push conector, flex cable)", value: "504" },
  { name: "Automatic cable connection by 6 axis robot.", value: "505" },
  { name: "Visual inspection (Operator)", value: "506" },
  {
    name: "Automatic pick and place and assembly with pressure validation",
    value: "507",
  },
];

const list_6 = [
  {
    name: "Keyence 3D measurement",
    value: "601",
  },
  {
    name: "Cognex 3D measurement",
    value: "602",
  },
  {
    name: "Keyence vision sensor",
    value: "603",
  },
  {
    name: "Keyence vision system",
    value: "604",
  },
  {
    name: "Cognex camera vision system",
    value: "605",
  },
  {
    name: "Cognex camera vision sensor",
    value: "606",
  },
  {
    name: "Automatic inspection by laser sensor",
    value: "607",
  },
];

const list_7 = [
  { name: "Manual components assembly (snaps, thermal pad)", value: "701" },
  { name: "Minolta Sensor", value: "702" },
  { name: "Camera vision test", value: "703" },
  { name: "Flashing standard tower", value: "704" },
];

const product_handling = [
  {
    name: "Automatic Load and Unload",
    value: "TA",
  },
  {
    name: "Manual Load and Unload",
    value: "TM",
  },
  {
    name: "Auto Load Man Unload",
    value: "AM",
  },
  {
    name: "Man Load Auto Unload",
    value: "DS",
  },
];

const main_process_installed = [
  { name: "00", value: "00" },
  { name: "01", value: "01" },
  { name: "02", value: "02" },
  { name: "03", value: "03" },
  { name: "04", value: "04" },
  { name: "05", value: "05" },
  { name: "06", value: "06" },
  { name: "07", value: "07" },
  { name: "08", value: "08" },
  { name: "09", value: "09" },
  { name: "10", value: "10" },
  { name: "11", value: "11" },
  { name: "12", value: "12" },
  { name: "13", value: "13" },
  { name: "14", value: "14" },
  { name: "15", value: "15" },
  { name: "16", value: "16" },
  { name: "17", value: "17" },
  { name: "18", value: "18" },
  { name: "19", value: "19" },
  { name: "20", value: "20" },
];

const fixture_movement = [
  { name: "Single fixture fixed", value: "01" },
  { name: "Rotary single fixture", value: "02" },
  { name: "Drawer multiple position paralell to base plate", value: "03" },
  { name: 'Drawer multiple position in "Z" or vertical', value: "04" },
  { name: "Roundtable", value: "05" },
  { name: "Conveyor belt", value: "06" },
  { name: "Conveyor montratec", value: "07" },
];

const quantity_fixture = [
  { name: "00", value: "00" },
  { name: "01", value: "01" },
  { name: "02", value: "02" },
  { name: "03", value: "03" },
  { name: "04", value: "04" },
  { name: "05", value: "05" },
];

const level_standardization = [  {    "name": "0% < 30%",    "value": "S1"  },  {    "name": "30% < 60%",    "value": "S2"  },  {    "name": "60% < 90%",    "value": "S3"  },  {    "name": "90% to 100%",    "value": "S4"  }]


export function Conversor2() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [productHandling, setProductHandling] = useState("");
  const [mainProcess, setMainProcess] = useState("");
  const [mainProcess2, setMainProcess2] = useState("");
  const [processName, setProcessName] = useState("");
  const [processName2, setProcessName2] = useState("");
  const [mainProcessInstalled, setMainProcessInstalled] = useState("");
  const [secondProcessInstalled, setSecondProcessInstalled] = useState("");
  const [fixtureMovement, setFixtureMovement] = useState("");
  const [quantityFixture, setQuantityFixture] = useState("");
  const [levelStandardization, setLevelStandardization] = useState("")

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setProductHandling(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setMainProcess(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setMainProcessInstalled(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;
    setMainProcess2(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange5 = (event) => {
    const {
      target: { value },
    } = event;
    setSecondProcessInstalled(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange6 = (event) => {
    const {
      target: { value },
    } = event;
    setFixtureMovement(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange7 = (event) => {
    const {
      target: { value },
    } = event;
    setQuantityFixture(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange8 = (event) => {
    const {
      target: { value },
    } = event;
    setLevelStandardization(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange9 = (event) => {
    const {
      target: { value },
    } = event;
    setProcessName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange10 = (event) => {
    const {
      target: { value },
    } = event;
    setProcessName2(
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
                Standard Equipment Configurator
              </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell
                title="Principle oof how the part is handled on the equipment cell"
                align="center"
              >
                Product handling
                <p style={{ display: "flex", justifyContent: "center" }}>(1)</p>
              </StyledTableCell>
              <StyledTableCell
                title="Core process of the equipment cell"
                align="center"
              >
                Main process
                <p style={{ display: "flex", justifyContent: "center" }}>(2)</p>
              </StyledTableCell>
              <StyledTableCell
                align="center"
              >
                QTY of components installed from main process
                <p style={{ display: "flex", justifyContent: "center" }}>(3)</p>
              </StyledTableCell>
              <StyledTableCell
                title="Minor activities in relation with the core processs"
                align="center"
              >
                Secondary process
                <p style={{ display: "flex", justifyContent: "center" }}>(4)</p>
              </StyledTableCell>
              <StyledTableCell
                align="center"
              >
                QTY of components installed from Secondary process
                <p style={{ display: "flex", justifyContent: "center" }}>(5)</p>
              </StyledTableCell>
              <StyledTableCell
                title="How the fixture is transported inside of the equipment cell to be processed"
                align="center"
              >
                Fixture movement
                <p style={{ display: "flex", justifyContent: "center" }}>(6)</p>
              </StyledTableCell>
              <StyledTableCell
                align="center"
              >
                QTY of fixtures
                <p style={{ display: "flex", justifyContent: "center" }}>(7)</p>
              </StyledTableCell>
              <StyledTableCell
                align="center"
              >
Level of standardization 
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
                      value={productHandling}
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
                      {product_handling.map((product) => (
                        <MenuItem
                          value={product.value}
                          style={getStyles(
                            product.name,
                            productHandling,
                            theme
                          )}
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
                      value={processName}
                      onChange={handleChange9}
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
                      {process_name.map((product) => (
                        <MenuItem
                          value={product.name}
                          style={getStyles(product.name, processName, theme)}
                        >
                          {product.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {processName != "" && (
                    <StyledTableCell align="center">
                      <div>
                        <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                          <Select
                            displayEmpty
                            value={mainProcess}
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
                            {processName == "Screwing" &&
                              list_1.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName == "Gluing & Dispensing" &&
                              list_2.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName == "Riveting & welding" &&
                              list_3.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName == "Cleaning" &&
                              list_4.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName == "Miscellaneos or uncategorized" &&
                              list_5.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName == "Components inspection" &&
                              list_6.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName == "Testing" &&
                              list_7.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </div>
                    </StyledTableCell>
                  )}
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div>
                  <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                    <Select
                      displayEmpty
                      value={mainProcessInstalled}
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
                      {main_process_installed.map((product) => (
                        <MenuItem
                          value={product.value}
                          style={getStyles(
                            product.name,
                            mainProcessInstalled,
                            theme
                          )}
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
                      value={processName2}
                      onChange={handleChange10}
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
                      {process_name.map((product) => (
                        <MenuItem
                          value={product.name}
                          style={getStyles(product.name, processName2, theme)}
                        >
                          {product.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {processName2 != "" && (
                    <StyledTableCell align="center">
                      <div>
                        <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                          <Select
                            displayEmpty
                            value={mainProcess2}
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
                            {processName2 == "Screwing" &&
                              list_1.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess2,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName2 == "Gluing & Dispensing" &&
                              list_2.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess2,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName2 == "Riveting & welding" &&
                              list_3.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess2,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName2 == "Cleaning" &&
                              list_4.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess2,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName2 == "Miscellaneos or uncategorized" &&
                              list_5.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess2,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName2 == "Components inspection" &&
                              list_6.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess2,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                            {processName2 == "Testing" &&
                              list_7.map((product) => (
                                <MenuItem
                                  value={product.value}
                                  style={getStyles(
                                    product.name,
                                    mainProcess2,
                                    theme
                                  )}
                                >
                                  {product.name}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </div>
                    </StyledTableCell>
                  )}
                </div>
              </StyledTableCell>

              <StyledTableCell align="center">
                <div>
                  <FormControl sx={{ m: 1, width: 110, mt: 3 }}>
                    <Select
                      displayEmpty
                      value={secondProcessInstalled}
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
                      {main_process_installed.map((product) => (
                        <MenuItem
                          value={product.value}
                          style={getStyles(
                            product.name,
                            secondProcessInstalled,
                            theme
                          )}
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
                      value={fixtureMovement}
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
                      {fixture_movement.map((product) => (
                        <MenuItem
                          value={product.value}
                          style={getStyles(
                            product.name,
                            fixtureMovement,
                            theme
                          )}
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
                      value={quantityFixture}
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
                      {quantity_fixture.map((product) => (
                        <MenuItem
                          value={product.value}
                          style={getStyles(
                            product.name,
                            quantityFixture,
                            theme
                          )}
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
                      value={levelStandardization}
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
                      {level_standardization.map((product) => (
                        <MenuItem
                          value={product.value}
                          style={getStyles(
                            product.name,
                            levelStandardization,
                            theme
                          )}
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
                text1={ productHandling }
                text2={ mainProcess }
                text3={ mainProcessInstalled }
                text4={ mainProcess2 }
                text5={ secondProcessInstalled }
                text6={ fixtureMovement }
                text7={ quantityFixture }
                text8={ levelStandardization }
              />
              </div>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  );
}
