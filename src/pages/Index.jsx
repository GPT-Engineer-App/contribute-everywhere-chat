import React, { useState } from "react";
import { ChakraProvider, Box, Text, Input, VStack, Button, Link, Center, Heading, Image, useToast } from "@chakra-ui/react";
import { FaGoogle, FaCalendarAlt, FaBook, FaUserFriends } from "react-icons/fa";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const toast = useToast();

  const handleAddItem = () => {
    if (currentItem) {
      setItems([...items, currentItem]);
      setCurrentItem("");
    }
  };

  const handleLogin = () => {
    if (username === "Fia" && password === "1233221 Aa") {
      setIsLoggedIn(true);
    } else {
      toast({
        title: "Fehler",
        description: "Falscher Benutzername oder Passwort.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (isLoggedIn) {
    return (
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Heading>Willkommen, {username}!</Heading>
          <Button leftIcon={<FaCalendarAlt />} w="full" onClick={() => alert("Kalender Termine hinzugefügt")}>
            Kalender
          </Button>
          <Button leftIcon={<FaBook />} w="full" onClick={() => alert("Notizen hinzugefügt")}>
            Notizen
          </Button>
          <Input placeholder="Notiz/Kalender/Kontakt hinzufügen" value={currentItem} onChange={(e) => setCurrentItem(e.target.value)} />
          <Button onClick={handleAddItem}>Hinzufügen</Button>
          {items.map((item, index) => (
            <Text key={index} mt={2}>
              {item}
            </Text>
          ))}
          <Link href="https://www.google.com" isExternal>
            <Button leftIcon={<FaGoogle />} w="full">
              Zu Google
            </Button>
          </Link>
        </VStack>
      </Box>
    );
  }

  return (
    <ChakraProvider>
      <Center h="100vh" flexDirection="column">
        <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxGYXJoYWQlMjBUZWNobm9sb2d5fGVufDB8fHx8MTcwOTc1MDQ5Nnww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" />
        <Text mt={2} mb={6}>
          Farhad Technologie ediy by Rifa Group
        </Text>
        <VStack spacing={4}>
          <Input placeholder="Benutzername" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Passwort" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleLogin}>Login</Button>
        </VStack>
      </Center>
    </ChakraProvider>
  );
};

export default App;
