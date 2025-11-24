import { icons } from "@/constants/icons";
import { deleteTask } from "@/services/tasks";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const DoneItem = ({
  $id, title, description, check,
}: TaskItem) => {

  const [isChecked, setChecked] = useState(check);
  const router = useRouter();
  return (
    <View className="flex mb-3">
      <View className=" flex flex-row m-1 border-white border-solid border-b rounded-3xl relative ml-3">
        <View className="flex flex-col w-[10%] mr-5 justify-between py-3">
          <Checkbox
            className="flex self-center mb-3"
            style={{
              transform: [{ scale: 1.3 }],
            }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />

          <TouchableOpacity className="self-center pb-1"
            onPress={async () => {
              await deleteTask($id);
              router.push('/');
            }}>
            <Image
              source={icons.del}
              style={{
                width: 25,
                height: 30,
                tintColor: '#6c0c0cff',
              }}
            />
          </TouchableOpacity>
        </View>

        <View className=" flex-col w-[80%] items-left justify-start h-full">
          <TouchableOpacity>
            <View className="justify-start">
              <Text className="text-caveat text-white text-4xl font-caveat">
                {title}
              </Text>
            </View>

            <View>
              <Text className="text-caveat text-white text-2xl my-1 mb-3 font-caveat">
                {description}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DoneItem;