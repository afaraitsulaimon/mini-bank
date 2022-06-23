import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Top from "../components/top";
import {
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

const Dashboard = () => {
  const [balanceDisplay, setBalanceDisplay] = useState(true);
  const [iconBalanceDisplay, setIconBalanceDisplay] = useState(true);

  const hideBalance = () => {
    setBalanceDisplay(!balanceDisplay);
    setIconBalanceDisplay(!iconBalanceDisplay);
  };

  const showBalance = () => {
    setBalanceDisplay(true);
    setIconBalanceDisplay(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Top />
        </View>

        <View style={styles.nameHolder}>
          <Text>Welcome Bola</Text>
        </View>
      </View>

      <View style={styles.acctNumberHolder}>
        <Text style={styles.acctNoTitle}>Account No</Text>
        <Text style={styles.acctNoText}>222222222</Text>
      </View>

      <View style={styles.balanceHolder}>
        <View>
          {balanceDisplay ? (
            <Text style={styles.balanceText}>N333,333</Text>
          ) : (
            <Text style={styles.balanceText}>XXXXXXXX</Text>
          )}
        </View>

        <View>
          {iconBalanceDisplay ? (
            <MaterialIcons name="remove-red-eye" onPress={hideBalance} />
          ) : (
            <Octicons name="eye-closed" onPress={showBalance} />
          )}
        </View>
      </View>

      <View style={styles.lineInBetween}></View>

      <View style={styles.downHolder}>
        <View style={styles.firstDownHolder}>
          <View style={styles.iconAndTextHolder}>
            <View style={styles.theIconHolder}>
              <MaterialCommunityIcons name="bank-transfer" size={30} color="#9b72eb" />
            </View>
            <Text style={styles.textUnderIcon}>Transfer</Text>
          </View>

          <View style={styles.iconAndTextHolder}>
            <View style={styles.theIconHolder}>
              <MaterialIcons name="payment" size={30} color="#9b72eb"/>
            </View>
            <Text style={styles.textUnderIcon}>Pay</Text>
          </View>

          <View style={styles.iconAndTextHolder}>
            <View style={styles.theIconHolder}>
              <Octicons name="device-mobile" size={30} color="#9b72eb" />
            </View>
            <Text style={styles.textUnderIcon}>Buy AirTime & Data</Text>
          </View>
        </View>

        <View style={styles.secondDownHolder}>
          <View style={styles.iconAndTextHolder}>
            <View style={styles.theIconHolder}>
              <MaterialCommunityIcons name="card-account-details" size={30} color="#9b72eb"  />
            </View>
            <Text style={styles.textUnderIcon}>Transaction Details</Text>
          </View>

          <View style={styles.iconAndTextHolder}>
            <View style={styles.theIconHolder}>
              <MaterialCommunityIcons name="cash" size={30} color="#9b72eb" />
            </View>
            <Text style={styles.textUnderIcon}>Cash Out</Text>
          </View>

          <View style={styles.iconAndTextHolder}>
            <View style={styles.theIconHolder}>
              <MaterialCommunityIcons name="account" size={30} color="#9b72eb"/>
            </View>
            <Text style={styles.textUnderIcon}>Account Manager</Text>
          </View>
        </View>

        <View style={styles.thirdDownHolder}>
          <View style={styles.iconAndTextHolder}>
            <View style={styles.theIconHolder}>
              <MaterialCommunityIcons name="cash-marker" size={30} color="#9b72eb" />
            </View>
            <Text style={styles.textUnderIcon}>Cash Maker</Text>
          </View>

          <View style={styles.iconAndTextHolder}>
            <View style={styles.theIconHolder}>
              <MaterialIcons name="collections" size={30} color="#9b72eb" />
            </View>
            <Text style={styles.textUnderIcon}>Apply for Loan</Text>
          </View>

          <View style={styles.iconAndTextHolder}>
            <View style={styles.theIconHolder}>
              <FontAwesome name="cc-mastercard" size={30} color="#9b72eb" />
            </View>
            <Text style={styles.textUnderIcon}>Card</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6ee",
    height: 667,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nameHolder: {
    justifyContent: "center",
    paddingRight: 10,
  },
  acctNumberHolder: {
    paddingLeft: 10,
    marginTop: 10,
  },
  acctNoTitle: {
    fontSize: "1.2em",
    fontWeight: "600",
  },
  balanceHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  balanceText: {
    fontSize: "1.2em",
    fontWeight: "600",
  },
  lineInBetween: {
    backgroundColor: "orange",
    height: 1,
    width: "80%",
    alignSelf: "center",
    marginTop: 40,
    shadowColor: "red",
    shadowRadius: 10,
    shadowOpacity: 4,
  },

  downHolder: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop:50,
  },
  firstDownHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  secondDownHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  thirdDownHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  iconAndTextHolder: {
    width: 80,
    padding: 5,
  },
  textUnderIcon: {
    textAlign:'center',
    paddingTop:10,
    fontWeight:'600',

  },

  theIconHolder: {
    alignSelf: "center",
  },



});
