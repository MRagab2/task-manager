import DoneItem from "@/components/DoneItem";
import TodoItem from "@/components/TodoItem";
import { icons } from "@/constants/icons";
import { getCheckedTasks, getUncheckedTasks } from "@/services/tasks";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function Index() {
  const [checkedTasks, setCheckedTasks] = useState([])
  const [uncheckedTasks, setUncheckedTasks] = useState([])

  const [uncheckedTasksLoading, setUncheckedTasksLoading] = useState(false);
  const [checkedTasksLoading, setCheckedTasksLoading] = useState(false);
  const [err, setError] = useState<Error | null>(null);

  const router = useRouter();

  useEffect(() => {
    try {
      setUncheckedTasksLoading(true);
      setCheckedTasksLoading(true);

      const fetchUnCheckedTask = async () => {
        const result = await getUncheckedTasks();
        setUncheckedTasks(result);
      };
      const fetchCheckedTask = async () => {
        const result = await getCheckedTasks();
        setCheckedTasks(result);
      };

      fetchUnCheckedTask();
      fetchCheckedTask();
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("An error occurred")
      );
    } finally {
      setUncheckedTasksLoading(false);
      setCheckedTasksLoading(false);
    }

  }, []);

  // const {
  //   data: uncheckedTaskItems,
  //   error: uncheckedTaskItemsError,
  //   loading: uncheckedTaskItemsLoading,
  // } = useFetch(getUncheckedTasks);

  // const {
  //   data: checkedTaskItems,
  //   error: checkedTaskItemsError,
  //   loading: checkedTaskItemsLoading,
  // } = useFetch(getCheckedTasks);

  return (
    <View className="bg-primary flex-1">
      {/* Header */}
      <View className="justify-center items-center mt-20 mb-10 flex-row">
        <Text className="font-dancing-script text-8xl text-secondary w-[55%]">
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
        }}
      >

        {uncheckedTasksLoading || checkedTasksLoading ? (
          <ActivityIndicator
            size='large'
            color='#0000ff'
            className='mt-10 self-center'
          />
        ) : err ? (
          <Text> Error {err?.message}</Text>
        ) : (
          <View className="flex flex-col">

            {/* Todo Header */}
            <View className="flex-row px-4 justify-between mb-5">
              <Text className="font-dancing-script text-5xl text-secondary">
                To-Do :
              </Text>
              <TouchableOpacity onPress={() => router.push(`/taskItem?taskIdParams=${0}`)} className="self-center mr-6">
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
            </View>

            {/* Todo Tasks */}
            <FlatList
              data={uncheckedTasks ?? []}
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
              <Text className="font-dancing-script text-5xl text-secondary">
                Done :
              </Text>
            </View>

            {/* Done Tasks */}
            <FlatList
              data={checkedTasks ?? []}
              renderItem={({ item }) => (
                <DoneItem {...item} />
              )}
              keyExtractor={(item) => item.$id.toString()}
              numColumns={1}
              scrollEnabled={false}
              nestedScrollEnabled={false}
              style={{
                marginBottom: 100
              }}
            />
          </View>
        )}
      </ScrollView>

    </View>
  );
}
