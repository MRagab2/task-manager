import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const DoneItem = ({
  title, description, check,
}: TaskItem) => {

  const [isChecked, setChecked] = useState(check);
  return (
    <TouchableOpacity className="relative pl-5">
      <View className=" 
      flex
      flex-row 
      m-2
      border-white 
      border-solid 
      border-b 
      rounded-3xl">
        <View className=" w-[15%] items-left justify-start items-left">
          <Checkbox
            style={{
              marginTop: 10,
              transform: [{ scale: 1.3 }],
            }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
        </View>

        <View className=" flex-col w-[80%] items-left justify-start h-full">
          <View className="justify-start">
            <Text className="text-caveat text-light-200 text-4xl font-caveat line-through">
              {title}
            </Text>
          </View>

          <View>
            <Text className="text-caveat text-light-300 text-2xl my-1 mb-3 font-caveat">
              {description}
            </Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default DoneItem;