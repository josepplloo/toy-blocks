import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import colors from "../constants/colors";

const Block = ({ block }) => {
  const { data, index } = block.attributes;
  const classes = useStyles();
  return (
    <Box className={classes.blockContent}>
        <Typography variant="h5" className={classes.heading}>
          {String(index).padStart(3, '0')}
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.data}
        >
          {data}
        </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "16px 0",
    boxShadow: "0px 3px 6px 1px rgba(0,0,0,0.15)",
    "&:before": {
      backgroundColor: "unset",
    },
  },
  summary: {
    padding: "0 24px",
  },
  blockContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    padding: 20,
    backgroundColor: colors.mischka,
    borderRadius: "2px",
    marginBottom: "5px"
  },
  content: {
    margin: "10px 0 !important", // Avoid change of sizing on expanded
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 700,
    display: "block",
    color: colors.indigo,
    lineHeight: 1.5,
  },
  data: {
    fontSize: theme.typography.pxToRem(17),
    color: colors.text,
    lineHeight: 2,
  },
}));

Block.propTypes = {
  block: PropTypes.shape({
    attributes: PropTypes.shape({
      index: PropTypes.number,
      data: PropTypes.string
    })
  }).isRequired
};

export default Block;
