import { Client, Databases, ID, Query } from "react-native-appwrite";

const ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)

const databases = new Databases(client);

export const getUncheckedTasks = async (): Promise<TaskItem[] | undefined> => {
    try {
        const result = await databases.listDocuments({
            databaseId: DATABASE_ID,
            collectionId: COLLECTION_ID,
            queries: [
                Query.equal('check', false)
            ]
        });

        return result.documents || [];
    } catch (error) {
        console.error(error);
        return undefined;
    }
};
export const getCheckedTasks = async (): Promise<TaskItem[] | undefined> => {
    try {
        const result = await databases.listDocuments({
            databaseId: DATABASE_ID,
            collectionId: COLLECTION_ID,
            queries: [
                Query.equal('check', true)
            ]
        });

        return result.documents || [];
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

export const deleteTask = async (taskId: number) => {
    try {
        const result = await databases.deleteDocument({
            databaseId: DATABASE_ID,
            collectionId: COLLECTION_ID,
            documentId: taskId,
        });

        return result || [];
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

export const updateTask = async (taskItem: TaskItem) => {
    try {
        const result = await databases.updateDocument({
            databaseId: DATABASE_ID,
            collectionId: COLLECTION_ID,
            documentId: taskItem.$id,
            data: { ...taskItem }
        });

        return result || [];
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

export const getTaskById = async (taskId: number) => {
    try {
        const result = await databases.getDocument({
            databaseId: DATABASE_ID,
            collectionId: COLLECTION_ID,
            documentId: taskId,
        });

        return result;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

export const createTask = async (taskItem: TaskItem) => {
    try {
        let result;
        if (taskItem.title || taskItem.description) {
            result = await databases.createDocument({
                databaseId: DATABASE_ID,
                collectionId: COLLECTION_ID,
                documentId: ID.unique(),
                data: { ...taskItem },
            })
        }

        return result;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};