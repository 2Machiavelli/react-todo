export const addTodo = ({ title, text, executor }: { title: string, text: string, executor: any }) => {
    return {
        type: 'ADD_TODO',
        title,
        text,
        executor
    }
}