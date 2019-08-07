import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function FormDialog(props) {
  const classes = { useStyles }
  const { addPropertyDialog, handleSubmit, handleClose } = props

  const [state, setState] = useState({
    property: {
      MLSNumber: '',
      Price: 0,
      MunicipalEvaluation: 0,
      NoOneAndHalf: 0,
      NoTwoAndHalf: 0,
      NoThreeAndHalf: 0,
      NoFourAndHalf: 11,
      NoFiveAndHalf: 0,
      NoSixAndHalf: 0,
      Address: {
        PropertyNumber: '',
        Street: '',
        City: 'Montreal',
        Province: 'Quebec',
        Country: 'Canada',
      },
    },
  });

  const saveProperty = (e) => {
    e.preventDefault()
    handleSubmit(state.property)
  };

  const updateFormStateProperty = (e) => {
    const { property } = state;
    const path = e.target.name.split('.');

    let obj = property;
    let i
    for (i = 0; i < path.length - 1; i += 1) {
      obj = obj[path[i]];
    }

    if (e.target.type === 'number') {
      obj[path[i]] = parseFloat(e.target.value);
    }

    if (e.target.type === 'text') {
      obj[path[i]] = e.target.value;
    }

    setState({ ...state, obj });
  };


  return (
    <div>
      <Dialog open={addPropertyDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a Prospect Property</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a Prospect Property
          </DialogContentText>
          <TextField
            key={1}
            autoFocus
            id="MLSNumber"
            name="MLSNumber"
            label="MLSNumber"
            type="number"
            margin="dense"
            variant="outlined"
            onChange={updateFormStateProperty}
            fullWidth
          />
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TextField
                key={3}
                id="name"
                name="MunicipalEvaluation"
                label="MunicipalEvaluation"
                type="number"
                margin="dense"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">$</InputAdornment>,
                }}
                onChange={updateFormStateProperty}
              />
              <TextField
                key={2}
                id="name"
                name="Price"
                label="Price"
                type="number"
                margin="dense"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">$</InputAdornment>,
                }}
                onChange={updateFormStateProperty}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <TextField
                    key={2}
                    id="name"
                    name="NoOneAndHalf"
                    label="N-oOneAndHalf"
                    type="number"
                    margin="dense"
                    variant="outlined"
                    defaultValue={state.property.NoOneAndHalf}
                    onChange={updateFormStateProperty}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    key={2}
                    id="name"
                    name="NoTwoAndHalf"
                    label="NoTwoAndHalf"
                    type="number"
                    margin="dense"
                    variant="outlined"
                    defaultValue={state.property.NoTwoAndHalf}
                    onChange={updateFormStateProperty}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    key={2}
                    id="name"
                    name="NoThreeAndHalf"
                    label="NoThreeAndHalf"
                    type="number"
                    margin="dense"
                    variant="outlined"
                    defaultValue={state.property.NoThreeAndHalf}
                    onChange={updateFormStateProperty}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <TextField
                    key={2}
                    id="name"
                    name="NoFourAndHalf"
                    label="NoFourAndHalf"
                    type="number"
                    margin="dense"
                    variant="outlined"
                    defaultValue={state.property.NoFourAndHalf}
                    onChange={updateFormStateProperty}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    key={2}
                    id="name"
                    name="NoFiveAndHalf"
                    label="NoFiveAndHalf"
                    type="number"
                    margin="dense"
                    variant="outlined"
                    defaultValue={state.property.NoFiveAndHalf}
                    onChange={updateFormStateProperty}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    key={2}
                    id="name"
                    name="NoSixAndHalf"
                    label="NoSixAndHalf"
                    type="number"
                    margin="dense"
                    variant="outlined"
                    defaultValue={state.property.NoSixAndHalf}
                    onChange={updateFormStateProperty}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <TextField
                    key={2}
                    id="name"
                    name="Address.PropertyNumber"
                    label="PropertyNumber"
                    type="number"
                    margin="dense"
                    variant="outlined"
                    onChange={updateFormStateProperty}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    key={2}
                    id="name"
                    name="Address.Street"
                    label="Street"
                    type="text"
                    margin="dense"
                    variant="outlined"
                    onChange={updateFormStateProperty}
                  />
                </Grid>
              </Grid>
              <Grid container={3}>
                <Grid item xs={4}>
                  <TextField
                    key={2}
                    id="name"
                    name="Address.City"
                    label="City"
                    type="text"
                    margin="dense"
                    variant="outlined"
                    defaultValue={state.property.Address.City}
                    onChange={updateFormStateProperty}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    key={2}
                    id="name"
                    name="Address.Province"
                    label="Province"
                    type="text"
                    margin="dense"
                    variant="outlined"
                    defaultValue={state.property.Address.Province}
                    onChange={updateFormStateProperty}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    key={2}
                    id="name"
                    name="Address.Country"
                    label="Country"
                    type="text"
                    margin="dense"
                    variant="outlined"
                    defaultValue={state.property.Address.Country}
                    onChange={updateFormStateProperty}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={saveProperty} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
