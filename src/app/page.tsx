import { api } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  const todos = await api.todos.get();

  const bookTodos = await api.books.todos.get("the pragmatic programmer");

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      ))}

      {bookTodos?.map((todo) => (
        <div key={todo.books?.id}>
          <h1>{todo.books?.title}</h1>
        </div>
      ))}
    </div>
  );
}
