import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "../styles/styles";

interface SkillDataProps extends TouchableOpacityProps {
  skills: string;
}

export function SkillCard({ skills, ...rest }: SkillDataProps) {
  return (
    <TouchableOpacity {...rest} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skills}</Text>
    </TouchableOpacity>
  );
}
