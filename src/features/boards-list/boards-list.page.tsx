import { rqClient } from "@/shared/api/instance";
import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { Card, CardFooter, CardHeader } from "@/shared/ui/kit/card";
import { useQueryClient } from "@tanstack/react-query";
import {Link, href} from "react-router-dom"

function BoardListPage() {
  const queryClient = useQueryClient();

  const boardsData = rqClient.useQuery("get", "/boards");

  const createBoardMutation = rqClient.useMutation("post", "/boards", {
    onSettled: async () => {
      await queryClient.invalidateQueries(rqClient.queryOptions("get", "/boards"))
    },
  });
  const deleteBoardMutation = rqClient.useMutation("delete", "/boards/{boardId}", {
    onSettled: async () => {
      await queryClient.invalidateQueries(rqClient.queryOptions("get", "/boards"))
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h1>Boards List Page</h1>

      <form onSubmit={(e)=> {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement)
        createBoardMutation.mutate({
          body: {name: formData.get("name") as string}
        })
      }}>
        <input type="text" name="name" />
        <button
          type="submit"
          disabled={createBoardMutation.isPending}
        >
          Create board
        </button>
      </form>

      <div className="grid grid-cols-3 gap-4">
        {boardsData.data?.list.map(({id, name}) => (
          <Card key={id}>
            <CardHeader>
              <Button asChild variant="link">
                <Link to={href(ROUTES.BOARD, {boardId: id})}>{name}</Link>
              </Button>
            </CardHeader>
            <CardFooter>
              <Button
                variant="destructive"
                onClick={()=> deleteBoardMutation.mutate({params: {path: {boardId: id}}})}
                disabled={deleteBoardMutation.isPending}
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export const Component = BoardListPage;
