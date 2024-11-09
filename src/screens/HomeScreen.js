import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Card";
import AntDesign from "@expo/vector-icons/AntDesign";
import DetailsCard from "../components/DetailsCard";
import AttendanceCard from "../components/AttendanceCard";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#15331C" style="light" />
      {/* <LinearGradient
        colors={["#15331C", "#51B666"]}
        style={styles.background}
      > */}
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require("../../assets/images/Vector.png")} // Replace with your vector image path
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.header}>
            <View style={styles.headerLeft}></View>
            <TouchableOpacity style={styles.headerRight}>
              <View>
                <View style={styles.icon}>
                  <Ionicons name="person-outline" size={16} color="white" />
                </View>
              </View>
              <Text style={styles.headerName}>Kattapana Estate</Text>
            </TouchableOpacity>
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
                  868{" "}
                  <Text style={{ fontSize: 12, fontWeight: "500" }}>Total</Text>
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
                <Text style={styles.walletText}>₹1,08568</Text>
                <TouchableOpacity style={styles.innerCardButton}>
                  <View style={styles.transactionsButton}>
                    <Text style={styles.buttonText}>Transactions</Text>
                    <AntDesign name="arrowright" size={18} color="#575551" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      {/* </LinearGradient> */}
      <ScrollView contentContainerStyle={styles.scrollSection}>
        <View style={styles.scrollHeader}>
          <View style={styles.row1}>
            <Card text="Attendance" iconName="calendar-outline" />
            <Card text="Emp transfer" iconName="person-outline" />
            <Card text="Receive Products" iconName="receipt-outline" />
          </View>
          <View style={styles.row2}>
            <Card text="Petty cash" iconName="cash-outline" />
            <Card text="Leave request" iconName="cash-outline" />
            <Card text="Trip" iconName="car-outline" />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsRow}>
            <Text style={styles.detailsText}>Harvesting Details</Text>
            <TouchableOpacity>
              <Text style={styles.viewMoreText}>View more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsRow1}>
            <DetailsCard unit="3260kg" itemName="Cardamom" />
            <DetailsCard unit="326kg" itemName="Pepper" />
          </View>
          <View style={styles.detailsRow1}>
            <DetailsCard unit="260kg" itemName="Clove" />
            <DetailsCard unit="320kg" itemName="Pepper" />
          </View>
        </View>
        <View style={styles.attendanceContainer}>
          <View style={styles.attendanceRow}>
            <Text style={styles.detailsText}>Today’s Attendance</Text>
            <TouchableOpacity>
              <Text style={styles.viewMoreText}>View more</Text>
            </TouchableOpacity>
          </View>
          <AttendanceCard
            number="01"
            employee="Frances Swann"
            currentStatus="Absent"
          />
          <AttendanceCard
            number="02"
            employee="Sourav Ramesh"
            currentStatus="Present"
          />
          <AttendanceCard
            number="03"
            employee="Frances Swann"
            currentStatus="Present"
          />
          <AttendanceCard
            number="04"
            employee="Frances Swann"
            currentStatus="Present"
          />
          <AttendanceCard
            number="05"
            employee="Frances Swann"
            currentStatus="Absent"
          />
          <AttendanceCard
            number="06"
            employee="Frances Swann"
            currentStatus="Present"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEFC",
  },
  headerContainer: {
    position: "relative",
    height: 350,
    backgroundColor: "#FFFEFC",
  },
  background: {
    width: width,
    height: 300, 
    backgroundColor: "#15331C", 
    borderBottomLeftRadius: 60, 
    borderBottomRightRadius: 60,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerLeft: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 50,
    width: 81,
    height: 32,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    paddingVertical: 6,
    paddingLeft: 6,
    paddingRight: 14,
  },
  icon: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 30,
    padding: 5,
  },
  headerName: {
    marginHorizontal: 5,
    color: "#FFFFFF",
    fontSize: 12,
  },
  headerCard: {
    borderRadius: 16,
    padding: 16,
    position: "absolute",
    top: 80, 
    left: 20,
    right: 20,
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    zIndex: 1,
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
    borderRadius: 8,
    justifyContent: "space-between",
    backgroundColor: "#F1F9EA1A",
    height: 188,
    flex: 1,
    borderColor: "#F1F9EA1A",
    borderWidth: 1,
  },
  innerCardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  innerCardHeaderText: {
    color: "#FFFFFF",
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 14,
  },
  innerCardButton: {
    backgroundColor: "#FFFCF1",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 2,
  },
  transactionsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginRight: 5,
    fontSize: 12,
    color: "#575551",
  },
  totalAttentance: {
    color: "#FFFFFF",
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    paddingBottom: 15,
    fontWeight: "700",
  },
  attentanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  presentContainer: {
    borderRightWidth: 1,
    borderRightColor: "rgba(255, 255, 255, 0.2)",
    paddingRight: 20,
    borderRightHeight: 5,
  },
  attentanceNumber: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  attentanceText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  walletText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },
  scrollSection: {
    padding: 16,
    gap: 25,
  },
  scrollHeader: {},
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContainer: {
    gap: 12,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsText: {
    fontSize: 16,
    fontWeight: "500",
  },
  viewMoreText: {
    color: "#ECBC2A",
    fontWeight: "500",
  },
  detailsRow1: {
    flexDirection: "row",
    gap: 10,
  },
  attendanceContainer: {},
  attendanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
