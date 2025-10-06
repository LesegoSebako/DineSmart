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
    padding: 15,
    paddingTop: 10,
    alignItems: "center",
    minHeight: 180,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 5,
  },
  logo: {
    width: 300,
    height: 150,
    resizeMode: "contain",
    marginTop: 5,
  },
  culinaryImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  dishOfTheDaySection: {
    padding: 20,
    alignItems: "center",
  },
  dishOfTheDayTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  dishOfTheDaySubtitle: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    margin: 15,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryCard: {
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
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 30, // Added bottom margin to ensure space above phone buttons
  },
  buttonContainer: {
    paddingBottom: 40, // Extra padding to push content up
  },
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
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    color: colors.text,
    marginBottom: 15,
    lineHeight: 22,
    fontSize: 16,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    textAlign: "center",
    marginTop: 10,
  },
  courseTag: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 10,
  },
  courseTagText: { color: colors.white, fontSize: 14, fontWeight: "bold" },
  contentContainer: {
    flex: 1,
  },
  menuItem: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 4,
  },
  menuItemDescription: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.secondary,
  },
  emptyState: {
    textAlign: "center",
    color: colors.text,
    fontSize: 16,
    fontStyle: "italic",
    marginVertical: 20,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20, // Padding to ensure content doesn't get cut off
  },
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
  // Select the first item as "Dish of the Day" or show a default
  const dishOfTheDay = menuItems.length > 0 ? menuItems[0] : null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
        </View>
        {/* REMOVED: Text components for "Dine Smart" and "CULINARY EXPERIENCE" */}
      </View>

      {/* Culinary Experience Image */}
      <Image
        source={require("./assets/culinaryExperience.jpeg")}
        style={styles.culinaryImage}
      />

      <View style={styles.contentContainer}>
        {/* Dish of the Day Section */}
        <View style={styles.dishOfTheDaySection}>
          <Text style={styles.dishOfTheDayTitle}>Dish of the Day</Text>
          <Text style={styles.dishOfTheDaySubtitle}>
            Today's specially curated culinary delight
          </Text>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContent}
        >
          {!dishOfTheDay ? (
            <View style={styles.card}>
              <Text style={styles.dishName}>No Dish of the Day Selected</Text>
              <Text style={[styles.description, { textAlign: "center" }]}>
                Add a dish to feature it as today's special!
              </Text>
            </View>
          ) : (
            <View style={styles.card}>
              <View style={styles.courseTag}>
                <Text style={styles.courseTagText}>{dishOfTheDay.course}</Text>
              </View>
              <Text style={styles.dishName}>{dishOfTheDay.dishName}</Text>
              <Text style={styles.description}>{dishOfTheDay.description}</Text>
              <Text style={styles.price}>R{dishOfTheDay.price.toFixed(2)}</Text>
            </View>
          )}
        </ScrollView>

        {/* Single See Menu Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("MenuCategories")}
          >
            <Text style={styles.buttonText}>See Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const MenuCategoriesScreen = ({ navigation, menuItems }: any) => {
  const categories: Course[] = ["Starters", "Mains", "Desserts"];

  const getDishesByCategory = (category: Course) => {
    return menuItems.filter((item: MenuItem) => item.course === category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
        </View>
        <Text style={styles.headerTitle}>Our Menu</Text>
        <Text style={styles.headerSubtitle}>
          Discover our culinary offerings
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={{ padding: 10 }}>
          {categories.map((category) => {
            const categoryDishes = getDishesByCategory(category);

            return (
              <View key={category} style={styles.categoryCard}>
                <Text style={styles.categoryTitle}>{category}</Text>

                {categoryDishes.length === 0 ? (
                  <Text style={styles.emptyState}>
                    No {category.toLowerCase()} added yet
                  </Text>
                ) : (
                  categoryDishes.map((item: MenuItem) => (
                    <View key={item.id} style={styles.menuItem}>
                      <Text style={styles.menuItemName}>{item.dishName}</Text>
                      <Text style={styles.menuItemDescription}>
                        {item.description}
                      </Text>
                      <Text style={styles.menuItemPrice}>
                        R{item.price.toFixed(2)}
                      </Text>
                    </View>
                  ))
                )}
              </View>
            );
          })}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.secondary }]}
            onPress={() => navigation.navigate("Add")}
          >
            <Text style={styles.buttonText}>Add New Dish</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#666" }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    navigation.navigate("MenuCategories");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
        </View>
        <Text style={styles.headerTitle}>Add New Dish</Text>
        <Text style={styles.headerSubtitle}>
          Create your culinary masterpiece
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={{ padding: 10 }}>
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
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={addItem}>
            <Text style={styles.buttonText}>Add Dish to Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#666" }]}
            onPress={() => navigation.navigate("MenuCategories")}
          >
            <Text style={styles.buttonText}>Back to Menu</Text>
          </TouchableOpacity>
        </View>
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
        <Stack.Screen name="Home" options={{ title: "Dine Smart" }}>
          {(props) => (
            <HomeScreen
              {...props}
              menuItems={menuItems}
              onAddMenuItem={addMenuItem}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="MenuCategories"
          options={{ title: "Menu Categories" }}
        >
          {(props) => <MenuCategoriesScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="Add" options={{ title: "Add New Dish" }}>
          {(props) => <AddScreen {...props} onAddMenuItem={addMenuItem} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
