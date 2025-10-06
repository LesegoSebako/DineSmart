import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  Image,
} from "react-native";

const Stack = createNativeStackNavigator();

const colors = {
  primary: "#2D5A3D",
  secondary: "#8B4513",
  background: "#F5F5F5",
  white: "#FFFFFF",
  text: "#333333",
  border: "#E0E0E0",
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    backgroundColor: colors.primary,
    padding: 20,
    alignItems: "center",
    paddingTop: 40, // Extra padding to center the logo better
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 300, // Adjust size as needed
    height: 300, // Adjust size as needed
    resizeMode: "contain",
  },
  headerTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5, // Space between logo and title
  },
  headerSubtitle: {
    color: colors.white,
    fontSize: 16,
    marginTop: 5,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  buttonSecondary: { backgroundColor: colors.secondary },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.white,
    fontSize: 16,
  },
  dishName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 5,
  },
  description: {
    color: colors.text,
    marginBottom: 8,
    lineHeight: 20,
    fontSize: 14,
  },
  price: { fontSize: 16, fontWeight: "bold", color: colors.primary },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: colors.white,
    margin: 10,
    borderRadius: 8,
  },
  statItem: { alignItems: "center" },
  statValue: { fontSize: 20, fontWeight: "bold", color: colors.primary },
  statLabel: { fontSize: 12, color: colors.text, marginTop: 4 },
  buttonRow: { flexDirection: "row", padding: 10 },
  halfButton: { flex: 1, margin: 5 },
  courseTag: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  courseTagText: { color: colors.white, fontSize: 12, fontWeight: "bold" },
});

type Course = "Starters" | "Mains" | "Desserts";

interface MenuItem {
  id: string;
  dishName: string;
  description: string;
  course: Course;
  price: number;
}

const HomeScreen = ({ navigation, menuItems, onAddMenuItem }: any) => {
  const addSampleItems = () => {
    const samples: Omit<MenuItem, "id">[] = [
      {
        dishName: "Catfish Étouffée",
        description:
          "Succulent catfish fillets smothered in a rich, savory Cajun roux with onions, peppers, and celery, slow-simmered in Creole spice, and served over fluffy white rice. A Louisiana classic bursting with bold Southern flavors.",
        course: "Mains",
        price: 399,
      },
      {
        dishName: "Spring Salad",
        description:
          "Fresh mixed greens with seasonal vegetables and house dressing",
        course: "Starters",
        price: 120,
      },
      {
        dishName: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with molten center, served with vanilla ice cream",
        course: "Desserts",
        price: 95,
      },
    ];
    samples.forEach((item) => onAddMenuItem(item));
    Alert.alert("Success", "Sample menu items added!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("./assets/logo.png")} // Path to your logo
            style={styles.logo}
          />
        </View>
        <Text style={styles.headerTitle}>Dine Smart</Text>
        <Text style={styles.headerSubtitle}>CULINARY EXPERIENCE</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{menuItems.length}</Text>
          <Text style={styles.statLabel}>Total Items</Text>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {menuItems.length === 0 ? (
          <View style={styles.card}>
            <Text
              style={{ textAlign: "center", color: colors.text, fontSize: 16 }}
            >
              No menu items yet. Add some dishes to get started!
            </Text>
          </View>
        ) : (
          menuItems.map((item: MenuItem) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.courseTag}>
                <Text style={styles.courseTagText}>{item.course}</Text>
              </View>
              <Text style={styles.dishName}>{item.dishName}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
            </View>
          ))
        )}
      </ScrollView>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.halfButton]}
          onPress={() => navigation.navigate("Add")}
        >
          <Text style={styles.buttonText}>Add New Dish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.halfButton, styles.buttonSecondary]}
          onPress={addSampleItems}
        >
          <Text style={styles.buttonText}>Add Samples</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const AddScreen = ({ navigation, onAddMenuItem }: any) => {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState<Course>("Mains");

  const addItem = () => {
    if (!dishName.trim()) {
      Alert.alert("Error", "Please enter a dish name");
      return;
    }
    if (!description.trim()) {
      Alert.alert("Error", "Please enter a description");
      return;
    }
    if (!price) {
      Alert.alert("Error", "Please enter a price");
      return;
    }

    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      Alert.alert("Error", "Please enter a valid price");
      return;
    }

    onAddMenuItem({
      dishName: dishName.trim(),
      description: description.trim(),
      course,
      price: priceValue,
    });

    Alert.alert("Success", "Dish added to menu!");
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("./assets/logo.png")} // Path to your logo
            style={styles.logo}
          />
        </View>
        <Text style={styles.headerTitle}>Add New Dish</Text>
        <Text style={styles.headerSubtitle}>
          Create your culinary masterpiece
        </Text>
      </View>

      <ScrollView style={{ padding: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={dishName}
          onChangeText={setDishName}
          placeholderTextColor="#999"
        />

        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Description"
          multiline
          value={description}
          onChangeText={setDescription}
          placeholderTextColor="#999"
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 8,
            color: colors.text,
          }}
        >
          Select Course:
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          {(["Starters", "Mains", "Desserts"] as Course[]).map((crse) => (
            <TouchableOpacity
              key={crse}
              style={{
                flex: 1,
                padding: 12,
                margin: 5,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: course === crse ? colors.primary : colors.border,
                backgroundColor:
                  course === crse ? colors.primary : colors.white,
                alignItems: "center",
              }}
              onPress={() => setCourse(crse)}
            >
              <Text
                style={{
                  color: course === crse ? colors.white : colors.text,
                  fontWeight: "500",
                }}
              >
                {crse}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Price (e.g., 399)"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Add Dish to Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#666" }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addMenuItem = (item: Omit<MenuItem, "id">) => {
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    };
    setMenuItems((prev) => [...prev, newItem]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Home" options={{ title: "Dine Smart - Menu" }}>
          {(props) => (
            <HomeScreen
              {...props}
              menuItems={menuItems}
              onAddMenuItem={addMenuItem}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Add" options={{ title: "Add New Dish" }}>
          {(props) => <AddScreen {...props} onAddMenuItem={addMenuItem} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
