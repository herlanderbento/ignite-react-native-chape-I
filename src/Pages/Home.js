import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, FlatList } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";
import { styles } from "../styles/styles";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkills() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentHours = new Date().getHours();

    if (currentHours < 12) {
      setGreeting("Good morning!");
    } else if (currentHours >= 12 && currentHours < 18) {
      setGreeting("Good afternoon!");
    } else {
      setGreeting("Good night!");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Herlander !</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        placeholder="New Skills"
        placeholderTextColor="#555"
        style={styles.input}
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkills}>Add</Button>

      <Text style={[styles.title, { marginVertical: 20 }]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillCard key={item} skills={item} />}
      />
      {/* <ScrollView>
        {mySkills.map((skills) => (
          <SkillCard key={skills} skills={skills} />
        ))}
      </ScrollView> */}
    </View>
  );
}
