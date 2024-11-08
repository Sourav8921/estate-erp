import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Card";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#15331C" style="light" />
      <LinearGradient
        colors={["#15331C", "#51B666"]}
        style={styles.headerSection}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}></View>
          <View style={styles.headerRight}>
            <View style={styles.overlay} />
            <View>
              <View style={styles.icon}>
                <View style={styles.overlay} />
                <Ionicons name="person-outline" size={15} color="white" />
              </View>
            </View>
            <Text style={styles.headerName}>Kattapana Estate</Text>
          </View>
        </View>
        <LinearGradient
          colors={["#1C3521", "#337341"]}
          start={[0, 0.5]}
          end={[1, 0.5]}
          style={styles.headerCard}
        >
          <View style={styles.cardRow}>
            <Ionicons name="calendar" size={20} color="#FFFFFF" />
            <View style={styles.cardDate}>
              <Text style={styles.dateText}>January 23, 2024</Text>
              <Text style={styles.dateText}>Monday</Text>
            </View>
          </View>
          <View style={styles.innerCardContainer}>
            <View style={styles.innerCard}>
              <View style={styles.innerCardHeader}>
                <Ionicons name="people-outline" size={24} color="#F0DA73" />
                <Text style={styles.innerCardHeaderText}>Employees</Text>
              </View>
              <Text style={styles.totalAttentance}>
                868 <Text style={{ fontSize: 12 }}>Total</Text>
              </Text>
              <View style={styles.attentanceContainer}>
                <View style={styles.presentContainer}>
                  <Text style={styles.attentanceNumber}>800</Text>
                  <Text style={styles.attentanceText}>Present</Text>
                </View>
                <View>
                  <Text style={styles.attentanceNumber}>68</Text>
                  <Text style={styles.attentanceText}>Absent</Text>
                </View>
              </View>
            </View>
            <View style={styles.innerCard}>
              <View style={styles.innerCardHeader}>
                <Ionicons name="wallet-outline" size={24} color="#F0DA73" />
                <Text style={styles.innerCardHeaderText}>Wallet balance</Text>
              </View>
              <Text style={styles.walletText}>₹1,0000</Text>
              <TouchableOpacity style={styles.innerCardButton}>
                <View style={styles.transactionsButton}>
                  <Text style={styles.buttonText}>Transactions</Text>
                  <AntDesign name="arrowright" size={18} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </LinearGradient>
      <ScrollView style={styles.scrollSection}>
        <View style={styles.scrollHeader}>
          <View style={styles.row1}>
            <Card text='Attentance' iconName='calendar-outline'/>
            <Card text='Emp transfer' iconName="person-outline"/>
            <Card text='Receive Products' iconName="receipt-outline"/>
          </View>
          <View style={styles.row2}>
            <Card text="Petty cash" iconName="cash-outline"/>
            <Card text="Leave request" iconName="cash-outline"/>
            <Card text="Trip" iconName="car-outline"/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerSection: {
    height: 300,
    padding: 22,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  headerLeft: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    width: 81,
    height: 32,
    opacity: 0.3,
  },
  headerRight: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    padding: 5,
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 0,
    borderRadius: 50,
  },
  icon: {
    backgroundColor: "#CCC",
    borderRadius: 50,
    padding: 5,
  },
  headerName: {
    marginHorizontal: 5,
    color: "#FFFFFF",
    fontSize: 12,
  },
  headerCard: {
    borderRadius: 30,
    padding: 16,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cardDate: {
    flex: 1,
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateText: {
    color: "#FFFFFF",
    fontWeight: "300",
  },
  innerCardContainer: {
    flexDirection: "row",
    gap: 15,
  },
  innerCard: {
    padding: 16,
    borderRadius: 16,
    justifyContent: "space-between",
    backgroundColor: "#F1F9EA1A",
    height: 188,
    flex: 1,
  },
  innerCardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  innerCardHeaderText: {
    color: "#FFFFFF",
    marginLeft: 10,
  },
  innerCardButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 2,
  },
  transactionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginRight: 5,
    fontSize: 12,
  },
  totalAttentance: {
    color: "#FFFFFF",
    fontSize: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    paddingBottom: 15,
  },
  attentanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  presentContainer: {
    borderRightWidth: 0.5,
    borderRightColor: "#ccc",
    paddingRight: 20,
    borderRightHeight: 5,
  },
  attentanceNumber: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  attentanceText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  walletText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  scrollSection: {
    flex: 1,
    padding: 16,
  },
  scrollHeader: {
    marginTop: 35,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
