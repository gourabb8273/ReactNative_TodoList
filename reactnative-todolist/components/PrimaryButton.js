import { View, Text, Pressable, StyleSheet } from "react-native";

// import Colors from "../../constants/color";

function PrimaryButton({ title, onPress, backgroundColor,isDisabled }) {
//   function pressHandler() {

//   }

const buttonStyle = backgroundColor? [ buttonStyle, styles.buttonOuterContainer, {backgroundColor}] : [buttonStyle, styles.buttonOuterContainer];
  return (
    <View>
      <Pressable
      //  style={buttonStyle}
      disabled ={!isDisabled}
      android_ripple={{ color:'blue', borderRadius:25 }}
      // styles={styles.buttonInnerContainer}
      style={
        isDisabled
            ? buttonStyle
            : [buttonStyle, {opacity: 0.70, color: 'black'}]
        } 
        onPress={onPress}
        // android_ripple={{ color:Colors.primary600 }}
      >
        <Text style={styles.buttonContainer}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    backgroundColor: "#204ECF",
    overflow: "hidden",
    height: 45,
    margin:2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    elevation: 2,  
  },
  buttonInnerContainer: {
    // backgroundColor: "#204ECF",
    // "#0F256E",
    // "#204ECF",     j
    paddingVertical: 10,
    paddingHorizontal: 5,
    elevation: 2,
  },
  buttonContainer: {
    color: "white",
    textAlign: "center",
    fontSize: 17
  },
  //for iOS
  pressed: {
    opacity: 0.75,
  },
});