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
  StatusBar,
} from "react-native";

const Stack = createNativeStackNavigator();

const colors = {
  primary: "#2D5A3D",
  primaryLight: "#4CAF50",
  secondary: "#8B4513",
  secondaryLight: "#A0522D",
  background: "#F8F9FA",
  white: "#FFFFFF",
  text: "#2C3E50",
  textLight: "#7F8C8D",
  border: "#E0E0E0",
  success: "#27AE60",
  danger: "#E74C3C",
  warning: "#F39C12",
  info: "#3498DB",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
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
  insightsCard: {
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
    borderLeftWidth: 4,
    borderLeftColor: colors.info,
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
    marginBottom: 20, // Reduced from 30 to 20
  },
  buttonContainer: {
    paddingBottom: 20, // Reduced from 40 to 20
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
  dishNameOnly: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10, // Added margin for better spacing
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 15,
    textAlign: "center",
  },
  insightsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.info,
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
  menuItemSelected: {
    backgroundColor: "#E8F5E8",
    borderLeftColor: colors.success,
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
    paddingBottom: 10, // Reduced from 20 to 10
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  selectButton: {
    backgroundColor: colors.success,
    padding: 8,
    borderRadius: 6,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: colors.danger,
    padding: 8,
    borderRadius: 6,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
  actionButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  selectedBadge: {
    backgroundColor: colors.success,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 5,
  },
  selectedBadgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "bold",
  },
  insightsContainer: {
    marginTop: 10,
  },
  insightsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  insightsCategory: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    flex: 1,
  },
  insightsStats: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    textAlign: "right",
    flex: 1,
  },
  insightsTotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: colors.border,
    textAlign: "center",
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

// Sample dishes data
const sampleDishes: Omit<MenuItem, "id">[] = [
  // Starters
  {
    dishName: "Truffle Arancini",
    description:
      "Crispy risotto balls filled with wild mushrooms and truffle oil, served with parmesan cream sauce",
    course: "Starters",
    price: 145,
  },
  {
    dishName: "Beef Carpaccio",
    description:
      "Thinly sliced prime beef with capers, arugula, shaved parmesan, and truffle aioli",
    course: "Starters",
    price: 165,
  },
  {
    dishName: "Burrata Caprese",
    description:
      "Creamy burrata cheese with heirloom tomatoes, fresh basil, and aged balsamic reduction",
    course: "Starters",
    price: 125,
  },
  // Mains
  {
    dishName: "Wagyu Beef Burger",
    description:
      "Prime wagyu beef patty with smoked gouda, caramelized onions, truffle aioli on brioche bun",
    course: "Mains",
    price: 285,
  },
  {
    dishName: "Lobster Thermidor",
    description:
      "Fresh lobster baked with brandy cream sauce, gruyère cheese, and herb breadcrumbs",
    course: "Mains",
    price: 425,
  },
  {
    dishName: "Duck Confit",
    description:
      "Slow-cooked duck leg with garlic potatoes, roasted vegetables, and cherry port reduction",
    course: "Mains",
    price: 320,
  },
  // Desserts
  {
    dishName: "Chocolate Soufflé",
    description:
      "Warm dark chocolate soufflé with vanilla bean ice cream and chocolate sauce",
    course: "Desserts",
    price: 95,
  },
  {
    dishName: "Crème Brûlée",
    description:
      "Classic vanilla bean custard with caramelized sugar crust and fresh berries",
    course: "Desserts",
    price: 85,
  },
  {
    dishName: "Tiramisu",
    description:
      "Layers of espresso-soaked ladyfingers with mascarpone cream and cocoa dusting",
    course: "Desserts",
    price: 75,
  },
];

const HomeScreen = ({
  navigation,
  menuItems,
  dishOfTheDay,
  onSetDishOfTheDay,
}: any) => {
  // Calculate operational insights
  const calculateInsights = () => {
    const totalItems = menuItems.length;

    const starters = menuItems.filter((item) => item.course === "Starters");
    const mains = menuItems.filter((item) => item.course === "Mains");
    const desserts = menuItems.filter((item) => item.course === "Desserts");

    const avgStarters =
      starters.length > 0
        ? starters.reduce((sum, item) => sum + item.price, 0) / starters.length
        : 0;

    const avgMains =
      mains.length > 0
        ? mains.reduce((sum, item) => sum + item.price, 0) / mains.length
        : 0;

    const avgDesserts =
      desserts.length > 0
        ? desserts.reduce((sum, item) => sum + item.price, 0) / desserts.length
        : 0;

    const totalValue = menuItems.reduce((sum, item) => sum + item.price, 0);
    const overallAvg = totalItems > 0 ? totalValue / totalItems : 0;

    return {
      totalItems,
      starters: { count: starters.length, avgPrice: avgStarters },
      mains: { count: mains.length, avgPrice: avgMains },
      desserts: { count: desserts.length, avgPrice: avgDesserts },
      overallAvg,
    };
  };

  const insights = calculateInsights();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
        </View>
        {/* Text components removed */}
      </View>

      <Image
        source={require("./assets/culinaryExperience.jpeg")}
        style={styles.culinaryImage}
      />

      <View style={styles.contentContainer}>
        <View style={styles.dishOfTheDaySection}>
          <Text style={styles.dishOfTheDayTitle}>Dish of the Day</Text>
          <Text style={styles.dishOfTheDaySubtitle}>
            Today's specially curated culinary delight
          </Text>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {!dishOfTheDay ? (
            <View style={styles.card}>
              <Text style={styles.dishName}>No Dish of the Day Selected</Text>
              <Text style={[styles.description, { textAlign: "center" }]}>
                Select a dish from the menu to feature it as today's special!
              </Text>
            </View>
          ) : (
            <View style={styles.card}>
              <Text style={styles.dishNameOnly}>{dishOfTheDay.dishName}</Text>
            </View>
          )}

          {/* Operational Insights Card */}
          <View style={styles.insightsCard}>
            <Text style={styles.insightsTitle}>Operational Insights</Text>
            <Text
              style={[
                styles.description,
                { textAlign: "center", marginBottom: 15 },
              ]}
            >
              Total menu items and average pricing by course
            </Text>

            <View style={styles.insightsContainer}>
              <View style={styles.insightsRow}>
                <Text style={styles.insightsCategory}>Starters:</Text>
                <Text style={styles.insightsStats}>
                  {insights.starters.count} items • Avg: R
                  {insights.starters.avgPrice.toFixed(2)}
                </Text>
              </View>

              <View style={styles.insightsRow}>
                <Text style={styles.insightsCategory}>Mains:</Text>
                <Text style={styles.insightsStats}>
                  {insights.mains.count} items • Avg: R
                  {insights.mains.avgPrice.toFixed(2)}
                </Text>
              </View>

              <View style={styles.insightsRow}>
                <Text style={styles.insightsCategory}>Desserts:</Text>
                <Text style={styles.insightsStats}>
                  {insights.desserts.count} items • Avg: R
                  {insights.desserts.avgPrice.toFixed(2)}
                </Text>
              </View>

              <Text style={styles.insightsTotal}>
                Total: {insights.totalItems} items • Overall Avg: R
                {insights.overallAvg.toFixed(2)}
              </Text>
            </View>
          </View>

          {/* Add some extra space at the bottom of the scroll view */}
          <View style={{ height: 20 }} />
        </ScrollView>

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

const MenuCategoriesScreen = ({
  navigation,
  menuItems,
  dishOfTheDay,
  onSetDishOfTheDay,
  onDeleteMenuItem,
}: any) => {
  const categories: Course[] = ["Starters", "Mains", "Desserts"];

  const getDishesByCategory = (category: Course) => {
    return menuItems.filter((item: MenuItem) => item.course === category);
  };

  const handleSelectDish = (item: MenuItem) => {
    onSetDishOfTheDay(item);
    Alert.alert("Success", `${item.dishName} is now the Dish of the Day!`);
  };

  const handleDeleteDish = (item: MenuItem) => {
    Alert.alert(
      "Delete Dish",
      `Are you sure you want to delete "${item.dishName}"?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            onDeleteMenuItem(item.id);
            Alert.alert(
              "Deleted",
              `${item.dishName} has been removed from the menu.`
            );
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
        </View>
        {/* Text components removed */}
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
                    <View
                      key={item.id}
                      style={[
                        styles.menuItem,
                        dishOfTheDay?.id === item.id && styles.menuItemSelected,
                      ]}
                    >
                      {dishOfTheDay?.id === item.id && (
                        <View style={styles.selectedBadge}>
                          <Text style={styles.selectedBadgeText}>
                            DISH OF THE DAY
                          </Text>
                        </View>
                      )}
                      <Text style={styles.menuItemName}>{item.dishName}</Text>
                      <Text style={styles.menuItemDescription}>
                        {item.description}
                      </Text>
                      <Text style={styles.menuItemPrice}>
                        R{item.price.toFixed(2)}
                      </Text>

                      <View style={styles.actionButtons}>
                        <TouchableOpacity
                          style={styles.selectButton}
                          onPress={() => handleSelectDish(item)}
                        >
                          <Text style={styles.actionButtonText}>
                            {dishOfTheDay?.id === item.id
                              ? "Selected"
                              : "Select as Dish of Day"}
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.deleteButton}
                          onPress={() => handleDeleteDish(item)}
                        >
                          <Text style={styles.actionButtonText}>Delete</Text>
                        </TouchableOpacity>
                      </View>
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
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
        </View>
        {/* Text components removed */}
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
  const [dishOfTheDay, setDishOfTheDay] = useState<MenuItem | null>(null);

  // Add sample dishes on first load
  React.useEffect(() => {
    if (menuItems.length === 0) {
      sampleDishes.forEach((dish) => {
        const newItem: MenuItem = {
          ...dish,
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        };
        setMenuItems((prev) => [...prev, newItem]);
      });
    }
  }, []);

  const addMenuItem = (item: Omit<MenuItem, "id">) => {
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    };
    setMenuItems((prev) => [...prev, newItem]);
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
    if (dishOfTheDay?.id === id) {
      setDishOfTheDay(null);
    }
  };

  const setDishOfTheDayHandler = (item: MenuItem) => {
    setDishOfTheDay(item);
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
              dishOfTheDay={dishOfTheDay}
              onSetDishOfTheDay={setDishOfTheDayHandler}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="MenuCategories"
          options={{ title: "Menu Categories" }}
        >
          {(props) => (
            <MenuCategoriesScreen
              {...props}
              menuItems={menuItems}
              dishOfTheDay={dishOfTheDay}
              onSetDishOfTheDay={setDishOfTheDayHandler}
              onDeleteMenuItem={deleteMenuItem}
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
