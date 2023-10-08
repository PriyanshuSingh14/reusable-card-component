import React from "react";
import ReusableCard from "./components/ReusableCard";
import { Box, Grid } from "@mui/material";


function App() {
  const items = [
    {
      imageUrl: "monitor.webp",
      // imageUrl:monitor,
      description: "A monitor is an electronic output device used to display information being entered and processed on a computer.",
      key: Math.random(),
    },
    {
      imageUrl: 'keyboard.webp',
      description: "A keyboard is an input device used to enter characters and functions into the computer system by pressing buttons, or keys.",
      key: Math.random(),
    },
    {
      imageUrl: 'cpu.jpeg',
      description: "The computer's central processing unit (CPU) is the portion of a computer that retrieves and executes instructions",
      key: Math.random(),
    },
    {
      imageUrl: 'mouse.jpeg',
      description: "A mouse is a small device that a computer user pushes across a desk surface in order to point to a place on a display screen and to select one or more actions to take from that position.",
      key: Math.random(),
    },
    {
      imageUrl: 'ups.jpeg',
      description: "An uninterruptible power supply (UPS) is a device that allows a computer to keep running for at least a short time when incoming power is interrupted.",
      key: Math.random(),
    }
  ];

  return (
    <React.Fragment>
      <Box flexGrow={1}>
        <h1>Parts of Computer</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ReusableCard items={items} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default App;
