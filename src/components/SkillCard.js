import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

export function SkillCard({ skills }) {
  return (
    <TouchableOpacity key={skills} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skills}</Text>
    </TouchableOpacity>
  );
}