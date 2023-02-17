import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CartItem from "../components/cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, undoRemoveFromCart } from "../slices/cartSlice";
import Lottie from "lottie-react-native";
import BookList from "../components/books/BookList";
import { books } from "../data/books";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Header from "../components/Header";

const CartScreen = ({ navigation }) => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const [isRemoved, setIsRemoved] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const width = Dimensions.get("window").width;

  const [timeoutID, setTimeoutId] = useState(null);

  useEffect(() => {
    if (items.length == 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [items]);

  function remove() {
    clearTimeout(timeoutID);

    const time = isRemoved ? 250 : 0;
    setIsRemoved(false);

    setTimeout(() => {
      setIsRemoved(true);
      hiddenRemoveInfo();
    }, time);
  }

  function hiddenRemoveInfo() {
    setTimeoutId(
      setTimeout(() => {
        setIsRemoved(false);
      }, 3000)
    );
  }

  function undoRemove() {
    setIsRemoved(false);
    dispatch(undoRemoveFromCart());
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: !isRemoved ? withSpring(-width) : withSpring(0),
        },
        {
          translateY: isEmpty ? 0 : -60,
        },
      ],
    };
  });

  return (
    <View className="flex-1 bg-[#343434]">
      <Header title="Koszyk" />
      {!isEmpty ? (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
            className="flex-1 bg-white rounded-t-[15px]  px-5"
          >
            {items.map((data) => {
              return <CartItem key={data.id} data={data} remove={remove} />;
            })}
          </ScrollView>

          <View className="bg-white px-5 pb-16 pt-4">
            <TouchableOpacity
              className="py-3 bg-[#F15E3B] rounded-[10px] "
              onPress={() => navigation.navigate("DeliverySelectionScreen")}
            >
              <Text className="text-center text-white font-[Poppins-Bold] text-lg uppercase ">
                Wypożyczam
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 bg-white rounded-t-[15px] "
        >
          <View className="justify-center items-center px-5 mt-[-50px]">
            <Lottie
              source={require("../assets/lottie/33740-sad-empty-box")}
              autoPlay
              className="w-80"
            />
            <Text className="text-[#333] font-[Poppins-Regular] text-base text-center mt-[-50px]">
              Twój koszyk jest pusty
            </Text>
          </View>
          <View className="mt-8 pb-16">
            <Text className="text-lg mx-5 color-black font-[Poppins-Bold] leading-5 pt-2 mb-4">
              Może zainteresują Cię te pozycje:
            </Text>
            <BookList data={books.reverse().slice(0, 10)} />
          </View>
        </ScrollView>
      )}

      <Animated.View
        className="px-5 py-5 bg-[#f5f5f5] absolute bottom-16 right-3 left-3 rounded-lg  flex-row justify-between items-center "
        style={[
          {
            shadowColor: "#999",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          },
          animatedStyles,
        ]}
      >
        <Text className="font-[Poppins-Regular]">
          Usunięto książkę z koszyka.
        </Text>
        <TouchableOpacity onPress={() => undoRemove()}>
          <Text className="font-[Poppins-SemiBold] text-[#F15E3B] uppercase tracking-wider ">
            Cofnij
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default CartScreen;
