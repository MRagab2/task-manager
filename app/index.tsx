import TodoItem from "@/components/TodoItem";
import { icons } from "@/constants/icons";
import { getUncheckedTasks } from "@/services/tasks";
import useFetch from "@/services/useFetch";
import { FlatList, Image, Text, View } from "react-native";
import "./global.css";

export default function Index() {

  const {
    data: uncheckeTaskItems,
    error: uncheckeTaskItemsError,
    loading: uncheckeTaskItemsLoading,

  } = useFetch(getUncheckedTasks);

  // console.log(uncheckeTaskItems);
  return (
    <View className="bg-primary flex-1">
       <FlatList
        data={uncheckeTaskItems ?? []}
        renderItem={({ item }) => {
          <TodoItem {...item} />
        }}
        keyExtractor={(item) => item.$id.toString()}
        numColumns={1}
        className="mt-2"
        contentContainerStyle={{ paddingBottom: 120 }}
        ListHeaderComponent={() => (
          <>
            {/* Header */ }
            <View className="justify-center items-center my-16 flex-row">
              <Text className="font-dancing-script text-8xl text-secnodary w-[55%]">
                Taskii
              </Text>
              <Image
                style={{
                  width: 90,
                  height: 90,
                  tintColor: '#8ec1faff'
                }}
                source={icons.logo}
              />
            </View>
                
            {/* To DO header */}
            <View className="flex-col px-4">
              <Text className="font-dancing-script text-5xl text-secnodary">
                To-Do :
              </Text>
            </View>
          </>
        )}
      />
    </View> 
  );
}
