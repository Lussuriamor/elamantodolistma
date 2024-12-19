import Clone from "@/components/Clone";
import TodoistClone from "@/components/TodoistClone";
import SignIn from "@/components/sign-in";

export default function Home() {
  return (
    <div>
      <TodoistClone />
      <SignIn/>
      
    </div>
  );
}
// import { auth } from "@/auth"
 
// export default async function Page() {
//   const session = await auth()
//   if (!session) return <div>Not authenticated</div>
 
//   return (
//     <div>
//       <pre>{JSON.stringify(session, null, 2)}</pre>
//     </div>
//   )
// }
