import { icons } from '@/constants/icons';
import { createTask, getTaskById, updateTask } from '@/services/tasks';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const TaskItem = () => {
  const [taskId, setTaskId] = useState(0);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState<Error | null>(null);

  const { taskIdParams } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    try {
      const fetchTask = async () => {
        setLoading(true);
        setError(null);

        if (taskIdParams && taskIdParams != 0) {
          setTaskId(taskIdParams)
          const taskItem = await getTaskById(taskId);

          setTaskTitle(taskItem?.title || '-');
          setTaskDescription(taskItem?.description || '-');
        }
      };

      fetchTask();
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("An error occurred")
      );
    } finally {
      setLoading(false);
    }

  }, [taskId]);


  return (
    <View className="bg-primary flex-1">
      {/* Header */}
      <View className="justify-center items-center mt-20 mb-10 flex-row">
        <Text className="font-dancing-script text-8xl text-secondary w-[55%] " >
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

      {/* Buttons */}
      <View className="flex-row mx-12 mb-10  pr-5  justify-between items-center">
        <View className="">
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              source={icons.back}
              style={{
                tintColor: '#e60d0dff',
                width: 50,
                height: 50
              }}
            />
          </TouchableOpacity>
        </View>

        <View className=" ">
          <TouchableOpacity onPress={async () => {
            (taskId != 0)
              ? await updateTask({
                $id: taskId,
                title: taskTitle,
                description: taskDescription
              })
              : await createTask({ title: taskTitle, description: taskDescription });
            router.push('/');
          }}>
            <Image
              source={icons.save}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>


      {/* Body */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingBottom: 5
        }}
        contentContainerStyle={{
          minHeight: '100%',
        }}
      >
        {loading ? (
          <ActivityIndicator
            size='large'
            color='#0000ff'
            className='mt-10 self-center'
          />
        ) : err ? (
          <Text> Error {err?.message || err?.message}</Text>
        ) : (
          <View className="flex flex-col mx-10">

            {/* Title */}
            <View className='mb-6'>
              <View className='mx-5 mb-1'>
                <Text className='text-5xl text-secondary font-dancing-script'>
                  Title
                </Text>
              </View>

              <View className=' border border-secondary rounded-3xl p-1 px-8'>
                <TextInput
                  className='text-3xl text-white font-caveat'
                  value={`${taskTitle ? taskTitle : ''}`}
                  placeholder={`${taskTitle ? taskTitle : "Your Task's Title"}`}
                  placeholderTextColor="#ffffff62"
                  onChangeText={(text: string) => { setTaskTitle(text) }} />
              </View>
            </View>


            {/* Description  */}
            <View className='mb-5'>

              <View className='mx-5 mb-1'>
                <Text className='text-5xl text-secondary font-dancing-script'>
                  Description
                </Text>
              </View>

              <View className=' border border-secondary rounded-3xl p-2 px-8'>
                <TextInput
                  className='text-3xl text-white font-caveat h-fit pb-5'
                  multiline={true}
                  textAlignVertical="top"
                  value={`${taskDescription ? taskDescription : ''}`}
                  placeholder={`${taskDescription ? taskDescription : "A single line text line text line text line text line text line text line text input line text input text input"}`}
                  placeholderTextColor="#ffffff62"
                  onChangeText={(text: string) => { setTaskDescription(text) }} />
              </View>
            </View>
          </View>
        )}
      </ScrollView>

    </View>
  );
};

export default TaskItem;
const styles = StyleSheet.create({});