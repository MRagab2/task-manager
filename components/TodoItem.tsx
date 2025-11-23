import { Text, View } from "react-native";


const TodoItem = ({
  taskItem: { title, description, check },
}: TaskItem) => {
  return (
      <View className="flex-1 flex-row">
        <View className="flex-1 w-[10%]">

        </View>

        <View className="flex-1 flex-col w-[80%]">
          <View>
            <Text className="text-caveat text-white text-8xl m-5">
              {title}
            </Text>
          </View>

          <View>
            <Text className="text-caveat text-secondary text-8xl m-5">
              {description}
            </Text>
          </View>
        </View>

      </View>
  );
};

export default TodoItem;