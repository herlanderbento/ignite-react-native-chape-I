import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, FlatList } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";
import { styles } from "../styles/styles";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkills() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills((oldState) => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id));
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

      <Button title="New Add" onPress={handleAddNewSkills} />

      <Text style={[styles.title, { marginVertical: 20 }]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            onPress={() => handleRemoveSkill(item.id)}
            skills={item.name}
          />
        )}
      />
      {/* <ScrollView>
        {mySkills.map((skills) => (
          <SkillCard key={skills} skills={skills} />
        ))}
      </ScrollView> */}
    </View>
  );
}
