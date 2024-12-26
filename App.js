// Import library yang dibutuhkan
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, Button, Text, Appbar, DefaultTheme, Card, Paragraph, IconButton, Avatar } from 'react-native-paper';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeProvider, Button as RNEButton, Card as RNECard, Icon } from 'react-native-elements';

// Custom theme
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4caf50',
    accent: '#ff9800',
    background: '#fafafa',
    text: '#333333',
  },
};

// Komponen layar Home
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/300x150.png?text=Perpustakaan+Digital' }}
        style={styles.banner}
      />
      <Text style={styles.title}>Selamat Datang di Perpustakaan Digital 📚</Text>
      <Paragraph style={styles.paragraph}>
        Jelajahi koleksi buku kami dan temukan bacaan favorit Anda.
      </Paragraph>
      <RNEButton
        title="Profil Saya"
        buttonStyle={{ backgroundColor: '#4caf50', marginBottom: 10 }}
        onPress={() => navigation.navigate('Profile')}
      />
      <RNEButton
        title="Tentang Perpustakaan"
        type="outline"
        buttonStyle={{ borderColor: '#4caf50', borderWidth: 1 }}
        titleStyle={{ color: '#4caf50' }}
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

// Komponen layar Profile
function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📖 Profil Pengguna 📖</Text>
      <View style={styles.profileHeader}>
        <Avatar.Text size={64} label="EM" style={styles.avatar} />
        <View>
          <Text style={styles.profileName}>Elfrida mrbn</Text>
          <Text style={styles.profileEmail}>Email: elfrida90@gmail.com</Text>
        </View>
      </View>
      <RNECard containerStyle={styles.card}>
        <RNECard.Title>Statistik Bacaan</RNECard.Title>
        <RNECard.Divider />
        <Paragraph>📚 Buku Dibaca: 3</Paragraph>
        <Paragraph>🌟 Koleksi Favorit: 1</Paragraph>
        <Paragraph>🏆 Badge: Pembaca Setia</Paragraph>
      </RNECard>
      <RNECard containerStyle={styles.card}>
        <RNECard.Title>Riwayat Bacaan</RNECard.Title>
        <RNECard.Divider />
        <Paragraph>1. The Great Gatsby 📘</Paragraph>
        <Paragraph>2. Atomic Habits 📙</Paragraph>
        <Paragraph>3. To Kill a Mockingbird 📕</Paragraph>
      </RNECard>
      <RNECard containerStyle={styles.card}>
        <RNECard.Title>Favorit Saya</RNECard.Title>
        <RNECard.Divider />
        <Paragraph>1. The Great Gatsby 🌟</Paragraph>
      </RNECard>
      <RNEButton
        title="Tambah Buku Baru"
        icon={<Icon name="book" color="#ffffff" />} 
        buttonStyle={{ backgroundColor: '#4caf50', marginVertical: 10 }}
        onPress={() => console.log('Tambah Buku Baru')}
      />
      <RNEButton
        title="Keluar"
        icon={<Icon name="logout" color="#4caf50" />} 
        type="outline"
        buttonStyle={{ borderColor: '#4caf50', borderWidth: 1 }}
        titleStyle={{ color: '#4caf50' }}
        onPress={() => console.log('Keluar')}
      />
    </ScrollView>
  );
}

// Komponen layar About
function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tentang Perpustakaan</Text>
      <Paragraph style={styles.paragraph}>
        Perpustakaan Digital ini menyediakan berbagai buku dan artikel untuk menunjang kebutuhan literasi Anda.
      </Paragraph>
      <RNECard containerStyle={styles.card}>
        <RNECard.Title>Koleksi Buku</RNECard.Title>
        <RNECard.Divider />
        <Paragraph>
          Kami memiliki ribuan buku dari berbagai kategori seperti fiksi, non-fiksi, teknologi, dan lainnya.
        </Paragraph>
      </RNECard>
      <RNECard containerStyle={styles.card}>
        <RNECard.Title>Fasilitas Digital</RNECard.Title>
        <RNECard.Divider />
        <Paragraph>
          Nikmati pengalaman membaca yang nyaman dengan akses digital kapan saja dan di mana saja.
        </Paragraph>
      </RNECard>
    </ScrollView>
  );
}

// Stack Navigator untuk setiap layar
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ header: (props) => <CustomAppBar {...props} title="Beranda Perpustakaan" /> }}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ header: (props) => <CustomAppBar {...props} title="Profil Pengguna" /> }}
      />
      <Stack.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ header: (props) => <CustomAppBar {...props} title="Tentang Perpustakaan" /> }}
      />
    </Stack.Navigator>
  );
}

// Komponen AppBar Custom
const CustomAppBar = ({ title }) => (
  <Appbar.Header>
    <Appbar.Content title={title} />
  </Appbar.Header>
);

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function App() {
  return (
    <PaperProvider theme={customTheme}>
      <ThemeProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#4caf50',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#4caf50',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: '#666',
  },
  card: {
    marginBottom: 16,
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    marginRight: 16,
    backgroundColor: '#4caf50',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
});

export default App;
