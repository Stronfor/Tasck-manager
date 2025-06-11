import { rqClient } from "@/shared/api/instance";
import { ROUTES } from "@/shared/model/routes";
import {Link, href} from "react-router-dom"

function BoardListPage() {


  const boardsData = rqClient.useQuery("get", "/boards");

  return (
    <div>
      <h1>Boards List Page</h1>
      {boardsData.data?.list.map((board) => (
        <Link key={board.id} to={href(ROUTES.BOARD, {boardId: board.id})}>{board.name}</Link>
      ))}
    </div>
  )
}

export const Component = BoardListPage;
