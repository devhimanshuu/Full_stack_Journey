import React, { useState, useEffect } from "react";
import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true); // Use lowercase for variables

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Add semicolon
    }, 3000); // Add semicolon
  }, []);

  return (
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://source.unsplash.com/random/256x144" // Correct "unsplash"
          alt="skeleton"
          width={256}
          height={144}
        />
      )}
      <Stack direction="row" spacing={{ width: "100%", marginTop: "12px" }}>
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React Mui Learning</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
