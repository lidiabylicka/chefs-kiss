import { Theme } from "@aws-amplify/ui-react";

export const theme: Theme = {
  name: "minimal-theme",
  tokens: {
    colors: {
      background: {
        primary: { value: "transparent" }, // This is working
      },
      font: {
        primary: { value: "#000000" }, // Text color for general text
        secondary: { value: "#097969" }, // Text color for secondary text
        tertiary: { value: "#333333" }, // Text color for
      },
    },
    components: {
      authenticator: {
        form: {},
      },
      button: {
        primary: {
          backgroundColor: { value: "#dbbebb" }, //pink
          color: { value: "#097969" },
          _hover: {
            backgroundColor: { value: "#E4D00A" }, //YELLOW
            borderColor: { value: "#FFFFFF" },
          },
          borderColor: { value: "#333333" },
        },
      },
      input: {
        borderColor: { value: "#000000" },
        _focus: {
          borderColor: { value: "#dbbebb" },
        },
      },
      card: {
        outlined: {
          backgroundColor: { value: "#FFFFFF" },
          borderColor: { value: "transparent" },
        },
      },
      text: {
        color: { value: "#000000" },
      },
      heading: {
        color: { value: "#000000" },
      },
      tabs: {
        borderColor: { value: "#FFFFFF" },
        item: {
          color: { value: "#FFFFFF" },
          _hover: { color: { value: "#097969" } },
          _active: {
            color: { value: "#097969" },
            borderColor: { value: "#000000" },
          },
        },
      },
      fieldcontrol: {
        borderColor: { value: "#000000" },
        _focus: {
          borderColor: { value: "#E4D00A" },
          boxShadow: { value: "0 0 0 1px #E4D00A" },
        },
      },
      fieldmessages: {
        description: {
          color: { value: "#FFFFFF" },
        },
      },
    },
  },
};
