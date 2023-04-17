import Head from "next/head";
import { Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { FormEventHandler, useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

const wsUrl = "wss://writr-dev-gor63gfskq-uc.a.run.app/ws";
// const wsUrl = "ws://localhost:8081/ws";

export default function Home() {
  const { sendMessage, lastMessage } = useWebSocket(wsUrl);
  const message = lastMessage?.data ?? "";

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sx={{py: 4}}>
        <Stack>
          <Stack direction={"row"}>
            <Typography variant="h3">collab</Typography>
          </Stack>
          <Paper
            sx={{
              minWidth: "75%",
              minHeight: "100%",
              border: "1px solid #999",
              borderRadius: 4,
            }}
          >
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{ height: "100%", width: "100%", minHeight: 400, px: 3, py: 3 }}
              multiline
              onChange={(e) => sendMessage(e.target.value)}
              value={message}
            ></TextField>
          </Paper>
        </Stack>
      </Container>
    </>
  );
}
