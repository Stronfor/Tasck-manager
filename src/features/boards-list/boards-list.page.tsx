import { ROUTES } from "@/shared/model/routes";
import {Link, href} from "react-router-dom"

function BoardListPage() {
  return (
    <div>
      <h1>Boards List Page</h1>

      <Link to={href(ROUTES.BOARD, {boardId: "1"})}>BOARD</Link>
    </div>
  )
}

export const Component = BoardListPage;
