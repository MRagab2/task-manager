import DoneItem from "@/components/DoneItem";
import TodoItem from "@/components/TodoItem";
import { icons } from "@/constants/icons";
import { getCheckedTasks, getUncheckedTasks } from "@/services/tasks";
import useFetch from "@/services/useFetch";
import { Link } from "expo-router";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
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
            tintColor: '#8ec1fa'
          }}
          source={icons.logo}
        />
      </View>

      {/* Body */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          // alignItems: 'flex-start',
          // justifyContent: 'flex-start'
        }}
      >
        <View className="flex flex-col">

          {/* Todo Header */}
          <View className="flex-row px-4 justify-between mb-5">
            <Text className="font-dancing-script text-5xl text-secnodary">
              To-Do :
            </Text>
            <Link href={'/../components/DoneItem'} asChild className="self-center mr-6">
              <TouchableOpacity>
                <Image
                  source={icons.addNew}
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: '#8ec1fa',
                    alignSelf: 'flex-end'
                  }}
                />
              </TouchableOpacity>
            </Link>
          </View>

          {/* Todo Tasks */}
          <FlatList
            data={uncheckeTaskItems ?? []}
            renderItem={({ item }) => (
              <TodoItem {...item} />
            )}
            keyExtractor={(item) => item.$id.toString()}
            numColumns={1}
            className="mb-5"
            scrollEnabled={false}
            nestedScrollEnabled={false}
          />

          {/* Done Header */}
          <View className="flex-1 px-4 mb-5">
            <Text className="font-dancing-script text-5xl text-secnodary">
              Done :
            </Text>
          </View>

          {/* Done Tasks */}
          <FlatList
            data={checkeTaskItems ?? []}
            renderItem={({ item }) => (
              <DoneItem {...item} />
            )}
            keyExtractor={(item) => item.$id.toString()}
            numColumns={1}
            scrollEnabled={false}
            nestedScrollEnabled={false}
          />
        </View>
      </ScrollView>

    </View>
  );
}
