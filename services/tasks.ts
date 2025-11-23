import { Client, Databases } from "react-native-appwrite";

const ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)

const databases  = new Databases(client);

export const getUncheckedTasks = async (): Promise<TaskItem[] | undefined> => {
    try {
        const result = await databases.listDocuments({
            databaseId: DATABASE_ID,
            collectionId: COLLECTION_ID,
            // queries: []
        });

        // console.log(result + "aaaaaaaaa");
        return result.documents || [];
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// export const addTask = async (taskItem: TaskItem) => {
//     try {
//         await database.createDocument(
//             DATABASE_ID,
//             TABLE_ID,
//             ID.unique(),
//             {
//                 title: taskItem.title ? taskItem.title : '',
//                 description: taskItem.description ? taskItem.description : '',
//                 check: false
//             })
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }