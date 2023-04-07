import React, { useState } from 'react'
import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
  Autocomplete
} from "@mui/material"


const MuiForm = () => {
  const courses = ["react", "node", "mern", "next", "express"]
  const [Input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    courses: "",
    gender: ""
  });
  const changeHendeler = (e) => {
    setInput((Prev) => ({
      ...Prev,
      [e.target.name]: [e.target.value],
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Input);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name='name'
          value={Input.name}
          onChange={changeHendeler}
          type='text'
          variant='outlined'
          sx={{ margin: "20px" }}
          placeholder="enter name"
        />
        <br />
        <TextField
          name='email'
          value={Input.email}
          onChange={changeHendeler}
          type='email'
          variant='outlined'
          sx={{ margin: "20px" }}
          placeholder="enter email"
        />
        <br />
        <TextField
          name='password'
          value={Input.password}
          onChange={changeHendeler}
          type='password'
          variant='outlined'
          sx={{ margin: "20px" }}
          placeholder="enter password"
        />
        <br />

        <FormGroup sx={{ margin: "20px" }}>
          <FormControlLabel
            label='I Agree T&C'
            control={
              <Checkbox
                onChange={() =>
                  setInput((Prev) => ({
                    ...Prev,
                    terms: !Input.terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />

        <FormControl sx={{ margin: "20px", width: "80vw" }}>
          <InputLabel id="menu" >Courses</InputLabel>
          <Select labelId='menu'
            id='menu-list'
            label='courses'
            onChange={changeHendeler}
            name='courses'
            value={Input.courses}>
            <MenuItem value={"mogodb"}>mongodb</MenuItem>
            <MenuItem value={"react"}>react</MenuItem>
            <MenuItem value={"node"}>node</MenuItem>
            <MenuItem value={"express"}>express</MenuItem>
          </Select>
        </FormControl>
        <br />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={courses}
          sx={{ width: 300 , margin: "20px"}}
          renderInput={(params) => <TextField {...params} label="Select a courses" />}
        />
        <br />

        <FormControl sx={{ margin: "20px" }}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name='gender' onChange={changeHendeler}>
            <FormControlLabel
              value={'male'}
              label="Male"
              control={<Radio />}
            />
            <FormControlLabel
              value={'female'}
              label="Female"
              control={<Radio />}
            />
            <FormControlLabel
              value={'other'}
              label="Other"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <br />

        <Button
          type='submit'
          sx={{ margin: "20px" }}
          variant="outlined">submit</Button>
        <br />

      </form>
    </>
  )
}

export default MuiForm;