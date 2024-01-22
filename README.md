# API Explorer

API Explorer is a network viewer in the style of Open API.

## How this app works

This app convert from HAR to Open API.

```mermaid
flowchart LR
  HAR

  EntriesA["Entries"]
  EntriesB["Entries"]
  EntriesC["Entries"]

  OasA["Open API"]
  OasB["Open API"]
  OasC["Open API"]

  HAR --> EntriesA
  HAR --> EntriesB
  HAR --> EntriesC

  EntriesA --> OasA
  EntriesB --> OasB
  EntriesC --> OasC

  subgraph "Domain C"
    EntriesC
    OasC
  end

  subgraph "Domain B"
    EntriesB
    OasB
  end

  subgraph "Domain A"
    EntriesA
    OasA
  end
```

## Repository template

This repository generated from [Jonghakseo/chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite).
