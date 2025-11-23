import DoneItem from "@/components/DoneItem";
import TodoItem from "@/components/TodoItem";
import { icons } from "@/constants/icons";
import { getCheckedTasks, getUncheckedTasks } from "@/services/tasks";
import useFetch from "@/services/useFetch";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import "./global.css";

export default function Index() {

  const {
    data: uncheckeTaskItems,
    error: uncheckeTaskItemsError,
    loading: uncheckeTaskItemsLoading,
  } = useFetch(getUncheckedTasks);

  const {
    data: checkeTaskItems,
    error: checkeTaskItemsError,
    loading: checkeTaskItemsLoading,
  } = useFetch(getCheckedTasks);

return (
  <View className="bg-primary flex-1">
    {/* Header */}
    <View className="justify-center items-center mt-20 mb-10 flex-row">
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
    <ScrollView
      className=""
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        minHeight: '100%',
      }}
    >
      <FlatList
        data={uncheckeTaskItems ?? []}
        renderItem={({ item }) => (
          <TodoItem {...item} />
        )}
        keyExtractor={(item) => item.$id.toString()}
        numColumns={1}
        className=""
        scrollEnabled={false}
        nestedScrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 0 }}
        ListHeaderComponent={() => (
          <>
            <View className="flex-col px-4">
              <Text className="font-dancing-script text-5xl text-secnodary mb-5">
                To-Do :
              </Text>
            </View>
          </>
        )}
      />
      <FlatList
        data={checkeTaskItems ?? []}
        renderItem={({ item }) => (
          <DoneItem {...item} />
        )}
        keyExtractor={(item) => item.$id.toString()}
        numColumns={1}
        className="mt-10"
        scrollEnabled={false}
        nestedScrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 120 }}
        ListHeaderComponent={() => (
          <>
            <View className="flex-col px-4">
              <Text className="font-dancing-script text-5xl text-secnodary mb-5">
                Done :
              </Text>
            </View>
          </>
        )}
      />
    </ScrollView>

  </View>
);
}
