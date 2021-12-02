import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "../styles/styles";

export function Button({ children, ...rest }) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.8} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
