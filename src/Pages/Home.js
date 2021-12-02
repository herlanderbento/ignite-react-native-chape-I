import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

import { styles } from "../styles/styles";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkills() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Herlander !</Text>
      <TextInput
        placeholder="New Skills"
        placeholderTextColor="#555"
        style={styles.input}
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkills}>Add</Button>

      <Text style={[styles.title, { marginVertical: 20 }]}>My Skills</Text>
      {mySkills.map((skills) => (
        <SkillCard skills={skills} />
      ))}
    </View>
  );
}
