import React, { useState, useMemo, useEffect } from "react";
import {
  DataGrid,
  gridClasses
} from "@mui/x-data-grid";
import { useGetGroupManageQuery } from "state/api";
import FlexBetween from "components/FlexBetween";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import {
  Box,
  Button,
  useTheme,
  useMediaQuery
} from "@mui/material";
import Header from "components/Header";

const GroupManages = () => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  // state to hold the list of members in the group
  const [groupMembers, setGroupMembers] = useState([]);

  // function to add members to the group
  const addMember = () => {
    if (groupMembers.length < 5) {
      setGroupMembers([...groupMembers, ""]);
    }
  };

  // function to remove a member from the group
  const removeMember = (index) => {
    const newGroupMembers = [...groupMembers];
    newGroupMembers.splice(index, 1);
    setGroupMembers(newGroupMembers);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="MANAGE GROUP" subtitle="Manage group here" />
        <Button variant="contained" onClick={addMember}>
          Add Member
        </Button>
      </FlexBetween>
      {groupMembers.map((member, index) => (
        <Box key={index} mt={2}>
          <FlexBetween>
            <Box>
              <label htmlFor={`member-${index}`}>{`Member ${index + 1}`}</label>
              <input
                id={`member-${index}`}
                type="text"
                value={member}
                onChange={(e) => {
                  const newGroupMembers = [...groupMembers];
                  newGroupMembers[index] = e.target.value;
                  setGroupMembers(newGroupMembers);
                }}
              />
            </Box>
            <Button variant="contained" color="error" onClick={() => removeMember(index)}>
              Remove
            </Button>
          </FlexBetween>
        </Box>
      ))}
    </Box>
  );
};

export default GroupManages;
